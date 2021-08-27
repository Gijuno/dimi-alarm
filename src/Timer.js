import React from "react";
import Clock from "react-live-clock";
import Timechecker from "./Timechecker";
import styled from "styled-components";

const Block = styled.div`
    position: relative;
    width: 722px;
    height: 43px;
    background-color: #6C26F1;
    top: -40px;
    opacity: 0.4;
`;

const Container = styled.div`
    margin: auto;
    width: 50%;
    vertical-align: middle;
    text-align: center;
    margin-top: 17%;
`;

const Period = styled.div`
    font-family: S-CoreDream-9Black;
    src: src/fonts/S-CoreDream-9Black.woff;
    font-size: 100px;
    margin-bottom: 25px;
    margin-top: 25px;
`;

const Table = styled.div`
    font-family: S-CoreDream-5Medium;
    src: src/fonts/S-CoreDream-5Medium.woff;
    font-size: 40px;
`;

const clockstyle = {
    "font-family": "S-CoreDream-6Bold",
    "src": "src/fonts/S-CoreDream-6Bold.woff",
    "font-size": "70px",
}

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
        const table = ['일과 외', '수업시간', '쉬는시간', '식사', '청소 및 종례', '방과후 자율 학습', '야간 자율 학습', '1교시 수업시간', '2교시 수업시간', '3교시 수업시간', '4교시 수업시간', '5교시 수업시간', '6교시 수업시간', '7교시 수업시간']; // 8부터 1교시
        const period = (this.state.period === null) ? null : <div>{String(table[this.state.period])}</div>
        return (
            <Container>
                <Clock style={clockstyle} format={'HH:mm:ss'} ticking={true}/>
                <Period>{period}<Block/></Period>
                <Table>{this.state.time}</Table>
            </Container>
        )
    }
}

export default Timer;