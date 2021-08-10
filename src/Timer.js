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

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState({ date: new Date() });
                const hour = String(this.checkUnderTen(this.state.date.getHours()))
                const min = String(this.checkUnderTen(this.state.date.getMinutes()))
                if (min !== this.state.minute) {
                    const checked = Timechecker(hour + min);
                    if (checked !== null) {
                        this.setState({ time: checked[0] })
                        this.setState({ period: checked[1] });
                    }
                }
                this.setState({ minute: min });
            },
            1000
        );
    }

    render() {
        const table = ['일과 외', '수업시간', '쉬는시간', '식사', '청소 및 종례', '방과후 자율 학습', '야간 자율 학습'];
        const period = (this.state.period === null) ? null : <div>{String(table[this.state.period])}</div>
        return (
            <div>
                <Clock format={'HH:mm:ss'} ticking={true}/>
                {period}
                <div>{this.state.time}</div>
            </div>
        )
    }
}

export default Timer;