import React from "react";
import Clock from "react-live-clock";
import Timechecker from "./Timechecker";
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            minute: null,
            period: null,
        };
    }

    checkUnderTen = (time) => { return Number(time) < 10 ? '0'+time : time }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState({ date: new Date() });
                const hour = String(this.checkUnderTen(this.state.date.getHours()))
                const min = String(this.checkUnderTen(this.state.date.getMinutes()))
                if (min != this.state.minute) {
                    const checked = Timechecker(hour + min);
                    this.setState({ period: checked });
                }
                this.setState({ minute: this.state.date.getMinutes()});
            },
            1000
        );
    }

    render() {
        return (
            <div>
                <Clock format={'HH:mm:ss'} ticking={true}/>
                <div>{String(this.state.period)}</div>
            </div>
        )
    }
}

export default Timer;