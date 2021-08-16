import {bellPlayer} from "./App.js"
const Timechecker = (now) => {
    console.log(now)
    const times = [
        ['2126', "1교시 시작", 1],
        ['2127', "1교시 끝", 2],
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
        ['1640', "7교시 끝", 4],
        ['1640', "7교시 끝", 4],
        ['1705', "방과후 수업 준비", 2],
        ['1710', "방과후 1타임 시작", 5],
        ['1750', "방과후 1타임 끝", 2],
        ['1755', "방과후 2타임 시작", 5],
        ['1835', "방과후 2타임 끝", 3],
        ['1950', "야자 1타임 시작", 6],
        ['2110', "야자 1타임 끝", 2],
        ['2130', "야자 2타임 시작", 6],
        ['2230', "야자 2타임 끝", 0],
    ];

    const checker = []
    for (let i in times) {
        checker.push(times[i][0].indexOf(now) !== -1 ? i : false)
    }
    const index = checker.findIndex((x) => x !== false)
    if (index !== -1) {
        bellPlayer()
        return [times[index][1], times[index][2]];
    } else {
        return null;
    }
}

export default Timechecker;