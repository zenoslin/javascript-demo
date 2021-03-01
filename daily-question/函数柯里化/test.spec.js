const { curry } = require("./index");

test("函数柯里化", () => {
    const add = (x, y, z) => x + y + z;
    const curryAdd = curry(add);

    expect(curryAdd(1, 2, 3)).toBe(6);
    expect(curryAdd(1, 2)(3)).toBe(6);
    expect(curryAdd(1)(2, 3)).toBe(6);
    expect(curryAdd(1)(2)(3)).toBe(6);
});
