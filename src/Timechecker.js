import {bellPlayer} from "./App.js"
var count = 0
const Timechecker = (now) => {
    console.log(now);
    const times = [
        ['0900', "1교시 시작", 1],
        ['0950', "1교시 끝", 2],
        ['1000', "2교시 시작", 1],
        ['1050', "2교시 끝", 2],
        ['1100', "3교시 시작", 1],
        ['1150', "3교시 끝", 2],
        ['1200', "4교시 시작", 1],
        ['1250', "4교시 끝", 3],
        ['1350', "5교시 시작", 1],
        ['1440', "5교시 끝", 2],
        ['1450', "6교시 시작", 1],
        ['1540', "6교시 끝", 2],
        ['1550', "7교시 시작", 1],
        ['1640', "7교시 끝", 4]
    ];
    const checker = []
    for (let i in times) {
        checker.push(times[i][0].indexOf(now) !== -1 ? i : false)
    }
    const index = checker.findIndex((x) => x !== false)
    if(index !== -1) {
        count++
        if (count===1) {
            console.log("SUCCESS"); 
            console.log("count === " + count);
            bellPlayer()
            return [times[index][1], times[index][2]];
        } else {
            console.log("count === " + count);
            return "수업중";
        }
        
    } else {
        return null;
    }
}

export default Timechecker;