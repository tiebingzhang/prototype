import React, { Component } from "react";
import { OptionMaster } from "./optionmaster"



export default class OptionsInput extends OptionMaster {
  state = { val: "default1" }


  constructor(props) {
    super(props);

    var value = "default2" // default
    if (props) {
      if (props.option) {
        if (props.option.default) { value = props.option.default }
        if (props.option.val) { value = this.props.option.val }
      }
    }

    this.state.val = value;
  }

  componentDidMount() {
    // this.state = { value: this.props.option.value }
    // this.onChange = this.onChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }



  onKeyPress = (e) => {
    if (e.key == "Enter") {
      this.apply();
    }
  }

  onChange = (event) => {
    this.setState({ val: event.target.value }, () => {
      this.apply();
    });
  }

  render() {
    return (<div className="widgetMenuItem">

      <div className="row">
        <div className="col-4">
          {this.props.name}:
        </div>
        <div className="col-8">
          <input
            style={{ width: "100%" }}
            type="text"
            value={this.state.val}
            onKeyPress={this.onKeyPress}
            onChange={this.onChange} >
          </input>
        </div>
      </div>
    </div>)
  }
}