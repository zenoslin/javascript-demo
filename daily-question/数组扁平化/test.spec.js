const { reduceFlat, stackFlat } = require("./index");

test("stack flat 拍平数组", () => {
    expect(
        stackFlat(["a", ["b", "c"], ["d", ["e", ["f"]], "g"]])
    ).toStrictEqual(["a", "b", "c", "d", "e", "f", "g"]);
})

test("reduce flat 拍平指定层数", () => {
    expect(
        reduceFlat(["a", ["b", "c"], ["d", ["e", ["f"]], "g"]], 1)
    ).toStrictEqual(["a", "b", "c", "d", ["e", ["f"]], "g"]);
    expect(
        reduceFlat(["a", ["b", "c"], ["d", ["e", ["f"]], "g"]], 2)
    ).toStrictEqual(["a", "b", "c", "d", "e", ["f"], "g"]);
})
test("reduce flat 拍平指定0/负数", () => {
    expect(
        reduceFlat(["a", ["b", "c"], ["d", ["e", ["f"]], "g"]], 0)
    ).toStrictEqual(["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]);
    expect(
        reduceFlat(["a", ["b", "c"], ["d", ["e", ["f"]], "g"]], -10)
    ).toStrictEqual(["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]);
})
test("reduce flat 拍平无限", () => {
    expect(
        reduceFlat(["a", ["b", "c"], ["d", ["e", ["f"]], "g"]], Infinity)
    ).toStrictEqual(["a", "b", "c", "d", "e", "f", "g"]);
});
test("reduce flat 跳过空位", () => {
    expect(
        reduceFlat(["a", "b", "c", "d", ,])
    ).toStrictEqual(["a", "b", "c", "d"]);
});
