const { DateUnil } = require("../date-util");

const test = new DateUnil();
test
  .setYear(2019)
  .setMonth(5)
  .setDay(30)
  .setHours(0)
  .setMinute(0)
  .setSecond(0)
  .setMillisecond(0);

console.log("hourOffset", test.hourOffset());
console.log("minuteOffset", test.minuteOffset());
console.log("getTotalTime", test.getTotalTime());
console.log("format", test.format());
console.log("formatHMS", test.formatHMS());
console.log("formatHM", test.formatHM());
console.log("formatLeftTimeNum", test.formatLeftTimeNum());
console.log("formatLeftTimeStr", test.formatLeftTimeNum());
console.log("formatLeftHorM", test.formatLeftHorM());
console.log("formatLeftDHMS", test.formatLeftDHMS());
console.log("formatLeftHMS", test.formatLeftHMS(":"));
