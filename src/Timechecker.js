import {bellPlayer} from "./App.js"
var count = 0
const Timechecker = (now) => {
    // const fixed_time = {
    //     "1034": "TEST",
    //     "0900": "1교시 시작시간",
    //     "0950": "1교시 쉬는시간", 
    //     "1000": "2교시 시작시간", 
    //     "1050": "2교시 쉬는시간",
    //     "1100": "3교시 시작시간",
    //     "1150": "3교시 쉬는시간", 
    //     "1200": "4교시 시작시간", 
    //     "1250": "점심시간",
    //     "1350": "5교시 시작시간", 
    //     "1440": "5교시 쉬는시간", 
    //     "1450": "6교시 시작시간", 
    //     "1540": "6교시 쉬는시간", 
    //     "1550": "7교시 시작시간", 
    //     "1640": "청소시간" };
    console.log(now);
    const times = new Map([[
        '1553', "TEST"
    ], [
        '0900', "1교시 시작"
    ]]);
    if([...times.keys()].includes(now)) {
        count++
        if (count===1) {
            console.log("SUCCESS"); 
            console.log("count === " + count);
            bellPlayer()
            return [true, times[now]];
        } else {
            console.log("count === " + count);
            return [false, "수업중"];
        }
        
    } else {
        return [false, "수업중"];
    }
}

export default Timechecker;