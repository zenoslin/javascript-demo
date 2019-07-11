const { removeFile, removeFileSync } = require("./removeFile");

const dir =
  "/Users/zenoslin/Documents/GitHub/javascript-demo/node/删除文件/img";

// console.time("removeFile");
// removeFile(dir, () => {
//   console.log("删除完毕");
//   console.timeEnd("removeFile");
// });

console.time("removeFileSync");
removeFileSync(dir).then(res => {
  console.log(`${res}删除完毕`);
  console.timeEnd("removeFileSync");
});
