function bodyScroll(event) {
  event.preventDefault();
}

let top;
/**
 * 禁止滑动
 * @param {string} elementID - 标签id（建议body）
 */
export function noallowScroll(elementID) {
  top = document.documentElement.scrollTop;
  document
    .getElementById(elementID)
    .addEventListener('touchmove', bodyScroll, false);
  document.getElementById(elementID).style.cssText = `position:fixed;width:100%;top:${top * -1}px`;
}
/**
 * 允许滑动
 * @param {string} elementID - 标签id（建议body）
 */
export function allowScroll(elementID) {
  document
    .getElementById(elementID)
    .removeEventListener('touchmove', bodyScroll, false);
  document.getElementById(elementID).style.cssText = 'position:static;';
  document.documentElement.scrollTop = top;
}
