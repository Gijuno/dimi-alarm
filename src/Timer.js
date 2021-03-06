import React from "react";
import Clock from "react-live-clock";
import Timechecker from "./Timechecker";
import styled from "styled-components";
import './app.css';

const Block = styled.div`
    position: relative;
    width: 100%;
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
    font-family: 'S-CoreDream-9Black';
    font-size: 100px;
    margin-bottom: 25px;

`;

const Caution = styled.div`
    position: absolute;
    color: #DEDEDE;
    font-size: 28px;
    font-family: 'Noto Sans KR';
    bottom: 2%;
    right: 2%;
`;

const Table = styled.div`
    font-family: "S-CoreDream-5Medium";
    font-size: 40px;
`;

const clockstyle = {
    "font-family": "S-CoreDream-6Bold",
    "font-size": "70px",
    "margin-bottom": "25px",
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
            <div>
            <Container>
                <Clock style={clockstyle} format={'HH:mm:ss'} ticking={true}/>
                <Period>{period}<Block/></Period>
                <Table>{this.state.time}</Table>
            </Container>
            <Caution>*주변에 피해가 가지 않게 미리 사운드 조절 해주세요!</Caution>
            </div>
        )
    }
}

export default Timer;