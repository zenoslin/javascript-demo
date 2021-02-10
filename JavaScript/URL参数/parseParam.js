/**
 * @author       Zenos Lin <zenoslin@outlook.com>
 * @copyright    2021 Zenos Lin.
 */

/**
 * @name parseParam 解析 URL 参数
 * @param {string} url
 */
const parseParam = (url = window.location.href) => {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串提出来
  const paramsArr = paramsStr.split("&");
  let paramsObj = {};
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      let [key, val] = param.split("="); // 切割 key 和 value
      val = decodeURIComponent(val); // url解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否是数字
      paramsObj[key] = val; // 默认取同名 key 的最后一个 value
    } else {
      paramsObj[param] = true; // 处理没有 value 的参数
    }
  });
  return paramsObj;
};

const test = () => {
  console.log(parseParam("https://www.zenoslin.top?a=1&b=2&c")); // {a:1, b:2, c: true}
};
test();
