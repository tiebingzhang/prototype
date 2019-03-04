import React, { Component } from 'react';
import { Polyline, Polygon, Map, TileLayer, Marker, Popup, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";

var details = {
  lat: -25.864170,
  lng: 28.209336,
  zoom: 3
}

var inBound = false;

var circleColor = "#4c8ef7";

var llprod = [0.012, 0.012]
const L = require('leaflet');
var poly2tri = require('poly2tri');
const testp = [[51.505, -0.09], [51.51, -0.1], [51.51, -0.12]]
// const myIcon = L.icon({
//   iconUrl: '../markers/marker_Blue.png',
//   iconSize: [80, 96],
//   iconAnchor: [65, 96],
//   popupAnchor: [0, -96]
// });

// const selectedIcon = L.icon({
//   iconUrl: '../markers/marker_Red.svg',
//   iconSize: [80, 96],
//   iconAnchor: [40, 96],
//   popupAnchor: [0, -96]
// });

export class MapDevices extends Component {
  state = {
    devicePathHistory: undefined
  }

  constructor(props) {
    super(props)
  }

  setvalues = (device) => {
    if (device.meta.ipLoc == undefined || device.meta.ipLoc == null) {
      device.meta.ipLoc = {
        ll:
          [
            0.01,
            0.01
          ]
      }
    } else if (device.meta.ipLoc != undefined || device.meta.ipLoc != null) {
      if (device.meta.ipLoc.ll == undefined || device.meta.ipLoc == null) {
        device.meta.ipLoc = {
          ll:
            [
              0.01,
              0.01
            ]
        }
      }
    }

    details.lat = device.meta.ipLoc.ll[0];
    details.lng = device.meta.ipLoc.ll[1];

    if (this.props.widget == true) {
      details.zoom = 13;
    } else {
      details.zoom = 14;
    }
  };

  checkBound = (marker) => {
    var result = undefined;
    var temp = [];

    var contour = [];

    for (var boundaryPoints in marker.boundaryLayer.boundaryPoints) {
      var t = marker.boundaryLayer.boundaryPoints[boundaryPoints];
      for (var points in t) {
        if (points == 1) {
          contour.push(new poly2tri.Point(t[0], t[1]));
        }
      }
    }

    var swctx = new poly2tri.SweepContext(contour);
    swctx.triangulate();
    var triangles = swctx.getTriangles();

    for (var t in triangles) {
      var trianglePoints = triangles[t].points_;
      var triangle = [];
      for (var j in trianglePoints) {
        triangle.push(trianglePoints[j])
      }
      temp.push(this.PointInTriangle({ x: marker.meta.ipLoc.ll[0], y: marker.meta.ipLoc.ll[1] }, triangle[0], triangle[1], triangle[2]));
    }

    for (var t in temp) {
      if (temp[t] == true) {
        result = true;
      }
    }

    if (result == undefined) {
      result = false;
    }
    inBound = result;
  }

  sign = (p1, p2, p3) => {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
  }

  getHistory = (marker, action) => {
    fetch("/api/v3/boundaryPackets", {
      method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ id: marker, limit: 10 })
    })
      .then(response => response.json()).then(result => {
        var last = [];
        var finalCoords = [];

        for (var count in result) {
          if (result[count].ipLoc != undefined || result[count].ipLoc != null) {
            if (count == 0) {
              last = result[count].ipLoc.ll
              finalCoords.push(result[count].ipLoc.ll)
            } else {
              last = result[count - 1].ipLoc.ll
              if (last[0] != result[count].ipLoc.ll[0] && last[1] != result[count].ipLoc.ll[1]) {
                finalCoords.push(result[count].ipLoc.ll)
              }
            }
          } else if (result[count].data != undefined || result[count].data != undefined) {
            if (result[count].data.gps != undefined || result[count].data.gps != undefined) {
              var latlng = [result[count].data.gps.lat, result[count].data.gps.lon];

              if (count == 0) {
                last = latlng
                finalCoords.push(latlng)
              } else {
                last = [result[count - 1].data.gps.lat, result[count - 1].data.gps.lon]
                if (last[0] != latlng[0] && last[1] != latlng[1]) {
                  finalCoords.push(latlng)
                }
              }
            }
          } else {
            console.error("Data From Packets doesn't have loaction information.")
          }
        }
        this.setState({ devicePathHistory: finalCoords })
      })
      .catch(err => {
        console.error(err.toString())
        return (
          <div></div>
        )
      })
    if (this.props.showBoundary == true) {
      return (
        <Polyline color="blue" positions={this.state.devicePathHistory} />
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  PointInTriangle = (pt, v1, v2, v3) => {
    var d1, d2, d3;
    var has_neg, has_pos;

    d1 = this.sign(pt, v1, v2);
    d2 = this.sign(pt, v2, v3);
    d3 = this.sign(pt, v3, v1);

    has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(has_neg && has_pos);
  }

  render() {
    var allDevices = this.props.devices;
    var deviceSelected = this.props.deviceCall;

    allDevices.map((p, index) => {
      if (deviceSelected != undefined) {
        if (p.devid == deviceSelected.devid) {
          this.setvalues(p);
        }
      }
    });

    var position = [details.lat, details.lng]
    var defaultLoc = {
      ll:
        [
          0.01,
          0.01
        ]
    }
    return (
      <Map className="map" center={position} zoom={details.zoom} doubleClickZoom={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />
        {
          allDevices.map((marker) => {
            var gps = {
            }
            var bLayer = marker.boundaryLayer;
            if (bLayer == 0) {
              marker.boundaryLayer = undefined;
            }

            if (marker.selectedIcon == undefined) {
              fetch("/api/v3/selectedIcon", {
                method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({ key: marker.key, selectedIcon: false })
              })
                .then(response => response.json()).then(result => { console.log("Added Select Icon") })
                .catch(err => console.error(err.toString()));
            }

            marker.meta.ipLoc.ll = undefined;

            if (marker.payload.data.gps != undefined) {
              if (marker.payload.data.gps.lat != undefined && marker.payload.data.gps.lon != undefined) {
                marker.meta.ipLoc = {
                  ll:
                    [
                      marker.payload.data.gps.lat,
                      marker.payload.data.gps.lon
                    ]
                }
              } else {
                if (marker.payload.data.gps.latitude != undefined && marker.payload.data.gps.longitude != undefined) {
                  marker.meta.ipLoc = {
                    ll:
                      [
                        marker.payload.data.gps.latitude,
                        marker.payload.data.gps.longitude
                      ]
                  }
                } else {
                  marker.meta.ipLoc = defaultLoc;
                }
              }
            } else {
              if (marker.meta.ipLoc == undefined || marker.meta.ipLoc == null) {
                marker.meta.ipLoc = defaultLoc
              } else if (marker.meta.ipLoc != undefined || marker.meta.ipLoc != null) {
                if (marker.meta.ipLoc.ll == undefined || marker.meta.ipLoc.ll == null) {
                  marker.meta.ipLoc = defaultLoc
                }
                return marker.meta.ipLoc.ll;
              }
            }

            if (marker.selectedIcon == true && marker.boundaryLayer == undefined) {
              return (
                <div key={marker.devid}>
                  <FeatureGroup>
                    <EditControl
                      position='topleft'
                      onCreated={e => {
                        var latlngsArray = e.layer._latlngs;
                        var latlngs = [];
                        for (var x = 0; x < latlngsArray.length; x++) {
                          if (x == 0) {
                            var latlngsl = latlngsArray[x];
                            for (var latlng in latlngsl) {
                              var k = [
                                latlngsl[latlng].lat,
                                latlngsl[latlng].lng
                              ]
                              latlngs.push(k)
                            }
                          }
                        }

                        var dev = marker;
                        dev.boundaryLayer = { boundaryPoints: latlngs };
                        { this.checkBound(dev); }

                        var b = {
                          boundaryPoints: latlngs,
                          inbound: inBound
                        }

                        fetch("/api/v3/boundaryLayer", {
                          method: "POST",
                          headers: { "Accept": "application/json", "Content-Type": "application/json" },
                          body: JSON.stringify({ key: marker.key, boundaryLayer: b })
                        }).then(response => response.json()).then(result => {
                        }).catch(err => console.error(err.toString()));

                      }}
                      onDeleted={e => {
                        fetch("/api/v3/state/deleteBoundary", {
                          method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" },
                          body: JSON.stringify({ id: marker.devid, username: this.props.username })
                        }).then(response => response.json()).then(serverresponse => {
                        }).catch(err => console.error(err.toString()));
                      }}
                      draw={{
                        circlemarker: false,
                        marker: false,
                        rectangle: false,
                        circle: false,
                        polyline: false
                      }}
                    />
                  </FeatureGroup>
                  <Marker position={[llprod[0], llprod[1]]}>
                    <Popup>
                      <h5 className="popup">{marker.devid}</h5> <br />
                    </Popup>
                  </Marker>
                </div>
              )
            } else if (marker.selectedIcon == true && marker.boundaryLayer != undefined) {
              { this.checkBound(marker); }
              if (inBound) {
                circleColor = "#4c8ef7";
              } else {
                circleColor = "red";
              }
              var b = undefined;

              if (this.props.showBoundary == true) {
                b = true;
              } else {
                b = false;
              }

              return (
                <div key={marker.devid}>
                  <FeatureGroup >
                    <EditControl
                      position='topleft'
                      onEdited={e => {
                        e.layers.eachLayer(a => {
                          var p = []
                          for (var x in a._latlngs) {
                            if (x == 0) {
                              var f = a._latlngs[x];
                              for (var d in f) {
                                var k = [
                                  f[d].lat,
                                  f[d].lng
                                ]
                                p.push(k)
                              }
                            }
                          }
                          var b = {
                            boundaryPoints: p,
                            inbound: inBound
                          }

                          fetch("/api/v3/boundaryLayer", {
                            method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" },
                            body: JSON.stringify({ key: marker.key, boundaryLayer: b })
                          }).then(response => response.json()).then(result => {
                            console.log(result);
                          }).catch(err => console.error(err.toString()));
                        });
                      }}

                      onDeleted={e => {
                        fetch("/api/v3/state/deleteBoundary", {
                          method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" },
                          body: JSON.stringify({ id: marker.devid })
                        }).then(response => response.json()).then(serverresponse => {
                          console.log(serverresponse)
                        }).catch(err => console.error(err.toString()));
                      }}
                      draw={{
                        circlemarker: false,
                        marker: false,
                        rectangle: false,
                        circle: false,
                        polyline: false,
                        polygon: false
                      }}
                    />
                    <Polygon positions={marker.boundaryLayer.boundaryPoints} color={circleColor} />
                  </FeatureGroup>
                  {this.getHistory(marker.devid, b)}
                  <Marker
                    position={[llprod[0], llprod[1]]}
                  >
                    <Popup>
                      <h5 className="popup">{marker.devid}</h5> <br />
                    </Popup>
                  </Marker>
                </div>
              )
            }

            if (marker.selectedIcon == false && this.props.widget == true) {
              return (
                <div key={marker.devid}>
                </div>
              )
            } else if (marker.selectedIcon == false) {
              return (
                <div key={marker.devid}>
                  <Marker position={[llprod[0], llprod[1]]}>
                    <Popup>
                      <h5 className="popup">{marker.devid}</h5> <br />
                    </Popup>
                  </Marker>
                </div>
              )
            }
          })
        }
      </Map>
    )
  }
}
