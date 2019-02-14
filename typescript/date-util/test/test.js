const {DateUnil} = require('../date-util')
let timeStamp = 1550131893
let leftSecond = 99999

console.log("hourOffset", DateUnil.hourOffset())
console.log("minuteOffset", DateUnil.minuteOffset())
console.log("getTotalTime", DateUnil.getTotalTime(timeStamp))
console.log("format", DateUnil.format(timeStamp))
console.log("formatHMS", DateUnil.formatHMS(timeStamp))
console.log("formatHM", DateUnil.formatHM(timeStamp))
console.log("formatLeftTimeNum", DateUnil.formatLeftTimeNum(leftSecond))
console.log("formatLeftTimeStr", DateUnil.formatLeftTimeNum(leftSecond))
console.log("formatLeftHorM", DateUnil.formatLeftHorM(leftSecond))
console.log("formatLeftDHMS", DateUnil.formatLeftDHMS(leftSecond))
console.log("formatLeftHMS", DateUnil.formatLeftHMS(leftSecond))