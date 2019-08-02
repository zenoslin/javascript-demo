/**
 * @author       Zenos Lin <zenoslin@outlook.com>
 * @copyright    2019 Zenos Lin.
 */

// 记录函数节流状态
const canRun = {};

/**
 * @function throttle 节流执行接口函数（Promise）
 *
 * @param {function} fn 需节流执行的Promise函数
 * @param {array} list 参数列表
 * @param {number} throttleCode 节流成功code
 *
 * @return {Promise} 返回函数内部Promise
 */
export default function throttle(fn, list = [], throttleCode = 9999) {
  if (canRun[fn.name]) return Promise.reject(throttleCode);
  if (!(fn instanceof Function)) return Promise.reject("fn is not a function");
  canRun[fn.name] = true;
  return fn(...list)
    .then(res => {
      canRun[fn.name] = false;
      return res;
    })
    .catch(err => {
      canRun[fn.name] = false;
      return err;
    });
}
