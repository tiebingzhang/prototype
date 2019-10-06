import React from "react";

interface MyProps { rx: boolean, tx: boolean }
interface MyState { }

export class Watch extends React.Component<MyProps, MyState> {
    state = {
        frame: 0,
        blink: []
    };

    start = 0;
    end = 50;
    frame = 0;
    frameRunning = 0;

    startvalue = -400;
    endvalue = 0;
    max = 100;

    componentDidMount() {
        var blink = []
        for (var a = 0; a <= this.max; a++) {
            blink.push(false);
        }
        this.setState({ blink }) // initial all off;

        setInterval(() => {
            this.animate();
        }, 50)
    }

    animate() {
        var blink = JSON.parse(JSON.stringify(this.state.blink))


        this.frameRunning++;


        if (this.frame < this.max) {

            blink[this.frame] = true;
            this.setState({ blink })
            this.frame++;
        } else {
            this.frame = 0;
            var blink: any = []
            for (var a = 0; a <= this.max; a++) {
                blink.push(false);
            }
            this.setState({ blink }) // initial all off;
        }
    }

    render() {
        var linesToDisplay = [];

        var anim = Math.sin((this.frameRunning + 100) / 25)
        var transform: any = "translate(0 " + (anim * 3) + ")"

        // return (<div>{this.state.y}</div>)

        var shadowopacity = 0.15 + (anim * 0.1);

        return (
            <g id="layerWatchMain" transform={transform}>
                <g id="layerWatch">
                    <path className="st39" id="path3406" d="M488.3,401.8L488.3,401.8l10.6-6.1c1.5-1,2.9-2.2,4.1-3.8l5.4-3.1c-1.3,1.7-2.9,3.1-4.6,4.1&#xA;&#x9;&#x9;&#x9;l-14.4,8.2L488.3,401.8 M489.6,400.9c1-0.8,2-1.8,2.8-2.9c0.1,0,0.2-0.1,0.3-0.2l4.9-2.8c-1.3,1.5-2.7,2.8-4.3,3.7L489.6,400.9&#xA;&#x9;&#x9;&#x9; M495.8,347.5c-3.9-17.5-16.2-35.6-30.6-44c-5.1-3-9.9-4.3-14.2-4.3c-2.8,0-5.4,0.6-7.6,1.7l15.2-8.8l0,0l0.1-0.1l0,0&#xA;&#x9;&#x9;&#x9;c2.4-1.4,5.2-2.1,8.2-2.1c4.3,0,9.1,1.4,14.2,4.3c14.4,8.3,26.6,26.5,30.6,43.9l-5.4,3.1c-4-17.5-16.2-35.6-30.6-43.9&#xA;&#x9;&#x9;&#x9;c-5.1-2.9-9.9-4.3-14.2-4.3c-3,0-5.8,0.7-8.2,2.1l0,0l-0.1,0.1l0,0l-0.7,0.4l0,0l0,0l0,0l-2.2,1.3l0,0l0,0c1.9-0.7,4-1.1,6.3-1.1&#xA;&#x9;&#x9;&#x9;c4.3,0,9.1,1.4,14.2,4.3c14.5,8.4,26.7,26.6,30.6,44.1L495.8,347.5" />
                    <path className="st40" id="path3422" d="M488.5,401.7c0.4-0.2,0.8-0.5,1.1-0.8l3.7-2.1c1.6-0.9,3.1-2.2,4.3-3.7l4.3-2.5&#xA;&#x9;&#x9;&#x9;c-1.2,1.5-2.5,2.8-4,3.7L488.5,401.7 M501.4,344.3c-3.9-17.5-16.2-35.8-30.6-44.1c-5.1-2.9-9.9-4.3-14.2-4.3&#xA;&#x9;&#x9;&#x9;c-2.3,0-4.4,0.4-6.3,1.1l2.2-1.3c2.4-1.3,5.1-2,8.1-2c4.3,0,9.1,1.4,14.2,4.3c14.4,8.3,26.6,26.5,30.6,43.9L501.4,344.3" />
                    <path className="st41" id="path3438" d="M488.3,401.8c0.1,0,0.1-0.1,0.2-0.1l9.4-5.4c1.5-1,2.9-2.2,4-3.7l1-0.6&#xA;&#x9;&#x9;&#x9;c-1.2,1.5-2.5,2.8-4.1,3.8L488.3,401.8 M505.3,342c-3.9-17.5-16.2-35.6-30.6-43.9c-5.1-2.9-9.9-4.3-14.2-4.3c-3,0-5.7,0.7-8.1,2&#xA;&#x9;&#x9;&#x9;l0,0l0.7-0.4l0,0l0.1-0.1l0,0c2.4-1.4,5.2-2.1,8.2-2.1c4.3,0,9.1,1.4,14.2,4.3c14.4,8.3,26.6,26.5,30.6,43.9L505.3,342" />
                    <path className="st42" id="path3454" d="M477.7,399.2c-3.8,0-8-1.2-12.5-3.8c-15.5-8.9-28-30.7-28-48.5v-22.7c0-12.7,6.3-20,15.5-20&#xA;&#x9;&#x9;&#x9;c0.8,0,1.5,0,2.3,0.1c-1.2,2.9-1.9,6.4-1.9,10.4l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0.1l0,0v22.7&#xA;&#x9;&#x9;&#x9;c0,17.8,12.6,39.6,28,48.5c0,0,0.1,0,0.1,0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c2.1,1.2,4.2,2.1,6.2,2.7v5.3&#xA;&#x9;&#x9;&#x9;c0,0.3,0,0.6,0.1,0.8C485.1,397.9,481.7,399.2,477.7,399.2 M453.1,323.9l-15.9,9.2v1.9l15.9-9.2V323.9" />
                    <path className="st43" id="path3470" d="M479.5,404.3c-4.3,0-9.1-1.4-14.2-4.3c-1.7-1-3.4-2.1-5-3.4c-0.4-0.3-0.8-0.6-1.2-0.9&#xA;&#x9;&#x9;&#x9;c-14.6-11.8-25.7-33.1-25.7-51v-11.9l3.9,2.3v-1.9l-3.9-2.3V322c0-10.6,3.9-17.9,10.1-21c2.3-1.1,4.8-1.7,7.6-1.7&#xA;&#x9;&#x9;&#x9;c4.3,0,9.1,1.4,14.2,4.3c14.4,8.3,26.7,26.5,30.6,44l-3.2,1.9c-2.7-16.1-14-33.6-27.4-41.3c-1.4-0.8-2.7-1.4-4-2&#xA;&#x9;&#x9;&#x9;c-1.9-0.8-3.8-1.3-5.5-1.6c-0.2,0-0.4-0.1-0.6-0.1l0,0c-0.8-0.1-1.6-0.1-2.3-0.1c-9.2,0-15.5,7.3-15.5,20v22.7&#xA;&#x9;&#x9;&#x9;c0,17.8,12.6,39.6,28,48.5c4.5,2.6,8.7,3.8,12.5,3.8c4,0,7.4-1.4,10-3.9c0.1,0.7,0.5,1.1,0.9,1.4l0,0l2.3,1.4&#xA;&#x9;&#x9;&#x9;c0.2,0.1,0.5,0.2,0.7,0.2s0.5,0,0.7-0.2c-0.8,1.1-1.8,2.1-2.8,2.9c-0.4,0.3-0.7,0.5-1.1,0.8c-0.1,0-0.1,0.1-0.2,0.1l0,0&#xA;&#x9;&#x9;&#x9;c-0.1,0.1-0.2,0.1-0.3,0.2C485.5,403.5,482.6,404.3,479.5,404.3" />
                    <path className="st44" id="path3488" d="M491,398l-2.3-1.4l0,0c-0.4-0.2-0.8-0.7-0.9-1.4c-0.1-0.2-0.1-0.5-0.1-0.8v-5.3v-33.4&#xA;&#x9;&#x9;&#x9;c0-2,1.2-4.2,2.7-5.1l2.3-1.3l3.2-1.9l5.5-3.2l4-2.3l1-0.6l5.4-3.1l4.2-2.4c0.4-0.2,0.7-0.3,1-0.3s0.5,0.1,0.7,0.2l0,0l2.3,1.4&#xA;&#x9;&#x9;&#x9;c-0.2-0.1-0.4-0.2-0.6-0.2c-0.3,0-0.7,0.1-1.1,0.3L492.6,352c-1.5,0.8-2.7,3.1-2.7,5.1v38.7C490.1,396.9,490.4,397.7,491,398" />
                    <path className="st45" id="path3504" d="M491.7,398.2c-0.3,0-0.5-0.1-0.7-0.2c-0.5-0.3-0.9-1.1-0.9-2.1v-38.7c0-2,1.2-4.2,2.7-5.1&#xA;&#x9;&#x9;&#x9;l25.7-14.8c0.4-0.2,0.7-0.3,1.1-0.3c0.2,0,0.4,0.1,0.6,0.2c0.6,0.3,1,1.1,1,2.2v38.7c0,2-1.2,4.2-2.7,5.1l-10.1,5.8l-5.4,3.1&#xA;&#x9;&#x9;&#x9;l-1,0.6l-4.3,2.5l-4.9,2.8c-0.1,0.1-0.2,0.1-0.3,0.2C492.2,398.2,491.9,398.2,491.7,398.2 M521.1,341c0-1-0.4-1.8-0.9-2.1&#xA;&#x9;&#x9;&#x9;l-0.7-0.4l0,0c-0.2-0.1-0.4-0.2-0.7-0.2s-0.6,0.1-1,0.3l-24.3,14c-1.4,0.8-2.5,3-2.5,4.8v36.8c0,1,0.4,1.8,0.9,2.1l0,0l0.7,0.4&#xA;&#x9;&#x9;&#x9;c0.2,0.1,0.4,0.2,0.7,0.2s0.6-0.1,1-0.3l24.3-14c1.4-0.8,2.5-3,2.5-4.8V341L521.1,341" />
                    <path className="st46" id="path3522" d="M492.5,396.7l-0.7-0.4l0,0c-0.6-0.3-0.9-1-0.9-2.1v-36.7c0-1.9,1.1-4,2.5-4.8l24.3-14&#xA;&#x9;&#x9;&#x9;c0.4-0.2,0.7-0.3,1-0.3s0.5,0.1,0.7,0.2l0,0l0.7,0.4c-0.2-0.1-0.4-0.1-0.6-0.1l0,0l0,0l0,0l0,0c-0.3,0-0.6,0.1-0.9,0.3l0,0l0,0&#xA;&#x9;&#x9;&#x9;l0,0l0,0l-24.3,14c-1.4,0.8-2.5,3-2.5,4.8l0,0v5.5v31.2C491.7,395.6,492,396.3,492.5,396.7" />
                    <path className="st47" id="path3524" d="M494.2,396.6c-1.4,0.8-2.5,0-2.5-1.9V358c0-1.9,1.1-4,2.5-4.8l24.3-14c1.4-0.8,2.5,0,2.5,1.9&#xA;&#x9;&#x9;&#x9;v36.7c0,1.9-1.1,4-2.5,4.8L494.2,396.6" />
                    <path className="st32" id="path3526" d="M494.6,393.8c-0.8,0-1.4-0.7-1.4-2v-27.7l26.3,11.7v0.8c0,1.7-1,3.6-2.3,4.3l-21.8,12.6&#xA;&#x9;&#x9;&#x9;C495.2,393.7,494.9,393.8,494.6,393.8" />
                    <path className="st48" id="path3542" d="M488.9,371.6c0.3,0.2,0.6,0.7,0.6,1.1v5.4c0,0.2-0.1,0.4-0.2,0.5l0,0l-0.4,0.2l0.1-0.2&#xA;&#x9;&#x9;&#x9;l-0.1-0.1l-0.1-0.1c-0.3-0.2-0.6-0.7-0.6-1.1v-5.4c0-0.1,0-0.2,0-0.3H488l0.3-0.2l0,0C488.6,371.4,488.7,371.4,488.9,371.6&#xA;&#x9;&#x9;&#x9;L488.9,371.6" />
                    <path className="st49" id="path3544" d="M488.6,378.8c0.3,0.2,0.6,0,0.6-0.5v-5.4c0-0.4-0.3-1-0.6-1.1l-0.1-0.1&#xA;&#x9;&#x9;&#x9;c-0.3-0.2-0.6,0-0.6,0.5v5.4C487.9,378,488.2,378.5,488.6,378.8L488.6,378.8" />
                    <path className="st50" id="path3580" d="M521.1,376.5l-1.6-0.7v-32c0-1.2-0.6-2-1.4-2c-0.3,0-0.6,0.1-0.9,0.3l-21.8,12.6&#xA;&#x9;&#x9;&#x9;c-1.2,0.7-2.3,2.7-2.3,4.3v5.2l-1.6-0.7V358c0-1.9,1.1-4,2.5-4.8l24.3-14l0,0l0,0l0,0l0,0c0.3-0.2,0.7-0.3,0.9-0.3l0,0l0,0&#xA;&#x9;&#x9;&#x9;c0.2,0,0.4,0.1,0.6,0.1c0.6,0.3,0.9,1,0.9,2.1L521.1,376.5" />
                    <path className="st51" id="path3582" d="M519.5,375.8l-26.3-11.7v-5.2c0-1.7,1-3.6,2.3-4.3l21.8-12.6c0.3-0.2,0.6-0.3,0.9-0.3&#xA;&#x9;&#x9;&#x9;c0.8,0,1.4,0.7,1.4,2v32.1" />
                    <path className="st52" id="path3598" d="M437.2,335v-1.9l15.9-9.2v1.9L437.2,335" />
                    <path className="st53" id="path3614" d="M437.2,335l-3.9-2.3v-1.9l3.9,2.3V335" />
                </g>
                <g id="layerWatchScreen">
                    {(this.props.rx) && <path className="st38" id="path3616" d="M514.5,350.3v-1l-1.4,0.8v1L514.5,350.3" />}
                    {(this.props.tx) && <path className="st38" id="path3632" d="M516.7,349v-1l-1.4,0.8v1L516.7,349" />}
                    {(this.state.blink[32]) && <path className="st38" id="path3618" d="M514.5,356.8v-5.7l-1.4,0.8v5.7L514.5,356.8" />}
                    {(this.state.blink[34]) && <path className="st38" id="path3620" d="M514.5,359.9v-2.2l-1.4,0.8v2.2L514.5,359.9" />}
                    {(this.state.blink[38]) && <path className="st38" id="path3622" d="M514.5,363.1v-2.2l-1.4,0.8v2.2L514.5,363.1" />}
                    {(this.state.blink[42]) && <path className="st38" id="path3624" d="M516.7,352.1v-2.2l-1.4,0.8v2.2L516.7,352.1" />}
                    {(this.state.blink[45]) && <path className="st38" id="path3626" d="M516.7,356.4v-3.3l-1.4,0.8v3.3L516.7,356.4" />}
                    {(this.state.blink[51]) && <path className="st38" id="path3628" d="M516.7,360.4v-2.8l-1.4,0.8v2.8L516.7,360.4" />}
                    {(this.state.blink[55]) && <path className="st38" id="path3630" d="M514.5,366.4v-2.2l-1.4,0.8v2.2L514.5,366.4" />}

                </g>
            </g>

        )
    }
}


