/**
 * 节流
 * 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 思路：每次触发事件时都判断当前是否有等待执行的延时函数
 * from:https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5
 */


function throttle(fn) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, argunments);
      canRun = true;
    }, 500);
  };
}
function sayHi(e) {
  console.log(e.target.innerWidth,e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));