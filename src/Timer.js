import React from "react";
import Clock from "react-live-clock";
import Timechecker from "./Timechecker";
class Timer extends React.Component {
    state = {
        date: new Date(),
        alarm: false,
    }

    timechecker() {
        this.setState(Timechecker())
    }

    render() {
        return (
            <div>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'KR/Pacific'}/>
            </div>
        )
    }
}

export default Timer;