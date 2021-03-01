// 利用while循环
// const reduceFlat = (arr, num = 1) => {
//     if (!Number(num) || Number(num) < 0) return arr;
//     let res = [].concat(arr);
//     while (num > 0) {
//         if (res.some((x) => Array.isArray(x))) {
//             res = res.reduce(
//                 (pre, cur) => pre.concat(Array.isArray(cur) ? [...cur] : cur),
//                 []
//             );
//         } else {
//             break;
//         }
//         num--;
//     }
//     return res.filter((res) => res !== undefined);
// };

// 利用递归
const reduceFlat = (arr, num = 1) => {
    if (!Number(num) || Number(num) < 0) return arr;
    return arr.reduce(
        (pre, cur) =>
            pre.concat(Array.isArray(cur) ? reduceFlat(cur, num - 1) : cur),
        []
    );
};

// 使用栈
const stackFlat = (arr) => {
    let res = [];
    let stack = [].concat(arr);
    while (stack.length > 0) {
        const val = stack.pop();
        if (Array.isArray(val)) {
            stack.push(...val);
        } else {
            res.unshift(val);
        }
    }
    return res;
};

module.exports = { reduceFlat, stackFlat };
