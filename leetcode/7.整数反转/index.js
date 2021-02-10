/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const numStr = x.toString();
    if (numStr.length <= 0) return 0;
    let numArr = numStr.split("");
    const res =
        numArr[0] === "-"
            ? +[].concat([numArr[0]], numArr.splice(1).reverse()).join("")
            : +numArr.reverse().join("");
    return res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31) ? 0 : res;
};

console.log(reverse(-123));
console.log(reverse(1534236469));
