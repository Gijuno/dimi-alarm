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
            alarm: null,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState({ date: new Date() });
                const checked = Timechecker(String(this.state.date.getHours())+String(this.state.date.getMinutes()));
                this.setState({ period: checked[1] });
                this.setState({ alarm: checked[0] });
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