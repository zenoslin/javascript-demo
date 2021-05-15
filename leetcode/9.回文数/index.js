/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome_1 = function (x) {
    const str = x.toString();
    const strArr = str.split("");
    return str === strArr.reverse().join("");
};

// console.log(isPalindrome_1(121) === true);
// console.log(isPalindrome_1(-121) === false);
// console.log(isPalindrome_1(10) === false);

const isPalindrome_2 = (x) => {
    // 负数不是回文数字
    // 最后一位为 0 的不是回文数，0除外
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let revertedNum = 0;
    while (x > revertedNum) {
        revertedNum = revertedNum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return x === revertedNum || x === Math.floor(revertedNum / 10);
};

console.log(isPalindrome_2(121) === true);
console.log(isPalindrome_2(-121) === false);
console.log(isPalindrome_2(10) === false);