import {bellPlayer} from "./App.js"
var count = 0
const Timechecker = (now) => {
    console.log(now);
    const times = new Map([
        ['0808', "1교시 시작"],
        ['2122', "1교시 끝"],
        ['1000', "2교시 시작"],
        ['1050', "2교시 끝"],
        ['1100', "3교시 시작"],
        ['1150', "3교시 끝"],
        ['1200', "4교시 시작"],
        ['1250', "4교시 끝"],
        ['1350', "5교시 시작"],
        ['1440', "5교시 끝"],
        ['1450', "6교시 시작"],
        ['1540', "6교시 끝"],
        ['1550', "7교시 시작"],
        ['1640', "7교시 끝"]
    ]);
    if([...times.keys()].includes(now)) {
        count++
        if (count===1) {
            console.log("SUCCESS"); 
            console.log("count === " + count);
            bellPlayer()
            return times.get(now);
        } else {
            console.log("count === " + count);
            return "수업중";
        }
        
    } else {
        return null;
    }
}

export default Timechecker;