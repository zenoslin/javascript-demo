/**
 * @author       Zenos Lin <zenoslin@outlook.com>
 * @copyright    2019 Zenos Lin.
 */

/**
 * @function getQuery 获取URL参数
 * 传入参数名获取当前地址栏上参数的值
 * @param {String} name
 * @return {String}
 */
export default function getQuery(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
