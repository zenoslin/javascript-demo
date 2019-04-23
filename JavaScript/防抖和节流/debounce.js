/**
 * 防抖
 * 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 * 思路：每次触发事件时都取消之前的延时调用方法
 * from:https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5
 */
function debounce(fn) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
function sayHi() {
  console.log('防抖成功');
}

let inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi));