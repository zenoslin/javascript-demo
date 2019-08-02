/**
 * @author       Zenos Lin <zenoslin@outlook.com>
 * @copyright    2019 Zenos Lin.
 */

/**
 * @function filterURLQuery 过滤URL参数
 *
 * @param {array<string>} $delete 删除参数数组
 * 示例：['code', 'openId']
 * @param {array<string>} $add 增加参数数组
 * 示例：['code=1', 'openId=ABC']
 * @param {string} targetURL  目标地址（默认本站点地址）
 */

export default function filterURLQuery(
  $delete = [],
  $add = [],
  targetURL = window.location.origin
) {
  let record = [];
  let addArr = [];
  if (window.location.href.indexOf("?") !== -1) {
    let search = window.location.search;
    let params = search.substr(1);
    let paramArr = params.split("&");
    $delete.map(val => {
      if (search.indexOf(val) === -1) return;
      for (let i = 0; i < paramArr.length; i++) {
        if (paramArr[i].indexOf(val) !== -1) {
          let temp = paramArr[i].split("=");
          if (temp[0] === val) record.push(i);
        }
      }
    });
    for (let i = 0; i < paramArr.length; i++) {
      if (record.indexOf(i) === -1) addArr.push(paramArr[i]);
    }
  }
  let searchArr = addArr.concat($add);
  let newSearch = "";
  if (searchArr.length > 0) {
    searchArr.map(val => {
      newSearch = newSearch + `&${val}`;
    });
    newSearch = `?${newSearch.substr(1)}`;
  }
  return `${targetURL + newSearch}`;
}
