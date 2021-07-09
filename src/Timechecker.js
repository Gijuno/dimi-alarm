const Timechecker = (now) => {
    const fixed_time = {
        "0900": "1교시 시작시간",
        "0950": "1교시 쉬는시간", 
        "1000": "2교시 시작시간", 
        "1050": "2교시 쉬는시간",
        "1100": "3교시 시작시간",
        "1150": "3교시 쉬는시간", 
        "1200": "4교시 시작시간", 
        "1250": "점심시간",
        "1350": "5교시 시작시간", 
        "1440": "5교시 쉬는시간", 
        "1450": "6교시 시작시간", 
        "1540": "6교시 쉬는시간", 
        "1550": "7교시 시작시간", 
        "1640": "청소시간" };
    if (now in Object.keys(fixed_time)) {
        return [true, fixed_time[now]];
    }
    else {
        return [false, "수업중"];
    }
}

export default Timechecker;