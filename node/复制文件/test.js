const { copyFileSync, copyFile } = require("./copyFile.js");

const source = "/Users/zenoslin/Documents/GitHub/javascript-demo/node/复制文件/img";
const dirname = "/Users/zenoslin/Documents/GitHub/javascript-demo/node/复制文件/temp";

console.time('copyFileSync')
copyFileSync(source, dirname).then(res => {
  console.log("复制成功!");
  console.timeEnd('copyFileSync')
});

copyFile(source, dirname);
