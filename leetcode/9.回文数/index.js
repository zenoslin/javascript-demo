/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    const strArr = str.split('');
    return str === strArr.reverse().join('');
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));