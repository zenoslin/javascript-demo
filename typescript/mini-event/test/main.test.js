const MiniEvent = require("./main").default;

test("on和emit是否正常?", () => {
  const manager = new MiniEvent();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  expect(manager.emit("add")).toBe(true);
});
