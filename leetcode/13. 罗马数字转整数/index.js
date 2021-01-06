/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        total += map[s[i]] < map[s[i + 1]] ? -map[s[i]] : map[s[i]];
    }
    return total;
};

/**
 * 愚蠢的解法
 * @param {string} s
 * @return {number}
 */
var romanToIntSB = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const numArr = s.split("").map((element) => map[element]);
    const objArr = numArr.map((value, index) => {
        if (index === numArr.length - 1) {
            return { value: value, decrease: false };
        }
        return { value: value, decrease: value < numArr[index + 1] };
    });
    objArr.forEach((item, index) => {
        if (item.decrease) {
            objArr[index + 1].value -= item.value;
        }
    });
    return objArr.reduce((previousValue, currentValue) => {
        return (previousValue += currentValue.decrease
            ? 0
            : currentValue.value);
    }, 0);
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
