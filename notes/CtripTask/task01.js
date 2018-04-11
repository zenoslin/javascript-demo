/*
 *给定一个长度小于 50 且包含字母和数字的任意字符串，
 *要求按顺序取出当中的数字和英文字母，数字需要去重，
 *重新排列后的字符串数字在前，字母在后。
*/

function handleStr(str) {
  var nums = str.match(/\d/g).join('');
  var words = str.match(/[a-zA-Z]/g).join('');
  return uniqueStr(nums) + words;
}
function uniqueStr(str) {
  var arr = str.split('');
  return arr.filter(function (element, index) {
    return arr.indexOf(element) === index;
  }).join('');
}
// 测试
console.log(handleStr('携程C2t0r1i8p2020校招'));// 2018Ctrip

