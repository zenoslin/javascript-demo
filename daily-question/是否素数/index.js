/**
 * 判断 2 -> n-1 是否存在 n 的约数
 * @param {Number} num
 * @return {Number}
 */
const isPrime_1 = (num) => {
    const tmp = num - 1;
    for (let i = 2; i <= tmp; i++) {
        if (num % i === 0) return 0;
    }
    return 1;
};

// console.log(isPrime_1(2) === 1);
// console.log(isPrime_1(3) === 1);
// console.log(isPrime_1(4) === 0);
// console.log(isPrime_1(5) === 1);
// console.log(isPrime_1(13) === 1);

/**
 * 判断 2 -> n的平方根 是否存在 n 的约数
 * @param {Number} num
 * @returns {Number}
 */
const isPrime_2 = (num) => {
    const tmp = Math.sqrt(num);
    for (let i = 2; i <= tmp; i++) {
        if (num % i === 0) return 0;
    }
    return 1;
};

// console.log(isPrime_2(2) === 1);
// console.log(isPrime_2(3) === 1);
// console.log(isPrime_2(4) === 0);
// console.log(isPrime_2(5) === 1);
// console.log(isPrime_2(13) === 1);

const isPrime_3 = (num) => {
    // 处理小于5的两个素数
    if (num === 2 || num === 3) return 1;
    // 不在6的倍数两侧的一定不是素数
    if (num % 6 !== 1 && num % 6 !== 5) return 0;
    // 在6的倍数两侧的也可能不是素数
    const tmp = Math.sqrt(num);
    for (let i = 5; i <= tmp; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return 0;
    }
    return 1;
};

console.log(isPrime_3(2) === 1);
console.log(isPrime_3(3) === 1);
console.log(isPrime_3(4) === 0);
console.log(isPrime_3(5) === 1);
console.log(isPrime_3(13) === 1);
