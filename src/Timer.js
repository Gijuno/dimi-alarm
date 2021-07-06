import React from "react";

class Timer extends React.Component {
    state = {
        date: new Date(),
    }

    render() {
        return (
            <div>
                {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
                &nbsp;:&nbsp;
                {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
            </div>
        )
    }
}

export default Timer;