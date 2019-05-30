const { InputCheck } = require('./input-check');

const test = new InputCheck();

test.setInput("").isEmpty("输入不能为空");
if (!test.isPass) {
  console.log("isEmpty", test.errorMessage);
}

test.setInput("77777").isEmpty("输入不能为空").minLength(6, '长度最小为6');
if (!test.isPass) {
  console.log("minLength", test.errorMessage);
}

test.setInput("7777777").isEmpty("输入不能为空").maxLength(6, '长度最达为6');
if (!test.isPass) {
  console.log("maxLength", test.errorMessage);
}

test.setInput("7777777").isEmpty("输入不能为空").isEmail('请输入邮箱');
if (!test.isPass) {
  console.log("isEmail", test.errorMessage);
}

test.setInput("7777777").isEmpty("输入不能为空").isURL('请输入链接');
if (!test.isPass) {
  console.log("isURL", test.errorMessage);
}

test.setInput("777777").isEmpty("输入不能为空").requireRegexp(new RegExp(
  "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
  "i"
), '请输入链接');
if (!test.isPass) {
  console.log("requireRegexp", test.errorMessage);
}

