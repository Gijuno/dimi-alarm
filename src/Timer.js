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
            time: null,
        };
    }

    checkUnderTen = (time) => { return Number(time) < 10 ? '0'+time : time }

    Timesetting = (checked) => {
        if (checked) {
            if (checked.includes('시작')) {
                this.setState({ time: 2 });
            } else if (checked.includes('끝')) {
                this.setState({ time: 3 });
            } else {
                this.setState({ time: 1 });
            }
        } else {
            this.setState({ time: 0 });
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState({ date: new Date() });
                const hour = String(this.checkUnderTen(this.state.date.getHours()))
                const min = String(this.checkUnderTen(this.state.date.getMinutes()))
                if (min != this.state.minute) {
                    const checked = Timechecker(hour + min);
                    this.Timesetting(checked);
                    this.setState({ period: checked });
                }
                this.setState({ minute: this.state.date.getMinutes()});
            },
            1000
        );
    }

    render() {
        const table = ['일과 외', '자습시간', '수업시간', '쉬는시간', '식사'];
        const period = (this.state.period == null) ? null : <div>{String(this.state.period)}</div>
        return (
            <div>
                <Clock format={'HH:mm:ss'} ticking={true}/>
                {period}
                <div>{table[this.state.time]}</div>
            </div>
        )
    }
}

export default Timer;