const compute = require("./index");

test("矩阵相同元素最长路径", () => {
    const array = [
        [1, 2, 1, 1],
        [1, 2, 3, 2],
        [2, 2, 1, 4],
        [1, 3, 1, 4],
    ];
    expect(compute(array)).toStrictEqual([
        [0, 1],
        [1, 1],
        [2, 0],
        [2, 1],
    ]);
});
