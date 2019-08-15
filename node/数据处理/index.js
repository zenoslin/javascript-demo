const fs = require("fs");
const path = require("path");
const excel2Json = require("convert-excel-to-json");

/**
 * config 配置
 */
let jsonPath = path.resolve(__dirname, "./temp.json"); // 缓存路径
let resultPath = path.resolve(__dirname, "./result.txt"); // 结果保存路径

let xlsxOptions = {
  sourceFile: "./59075.xlsx", // 表的相对路径
  columnToKey: {
    A: "date",
    B: "value"
  },
  sheets: ["Sheet1"] //表名
};
let eachCount = 24; // 每x个取最大 默认：24

/**
 * 主线程
 */
function main(options) {
  xlsx2json(options);
  let data = fs.readFileSync(jsonPath, { encoding: "utf8" });
  let dataArr = JSON.parse(data).Sheet1;
  let result = eachCountGetMax(dataArr, eachCount);
  try {
    fs.accessSync(resultPath, fs.constants.F_OK);
    console.log('清除结果文件');
    fs.unlinkSync(resultPath);
    console.log('开始写入结果');
  } catch (err) {
    console.log('开始写入结果');
  }
  fs.writeFileSync(resultPath, JSON.stringify(result));
  fs.unlinkSync(jsonPath);
}
/**
 * @function eachCountGetMax 每 x 取最大值
 * 
 * @param arr 数据数组
 * @param count x的值
 */
function eachCountGetMax(arr, count) {
  let total = Math.ceil(arr.length / count);
  let tasks = [];
  let maxArr = [];
  let progress = 0;
  for (let i = 0; i < total; i++) {
    tasks.push(arr.slice(i * count, count + i * count));
  }
  tasks.map(item => {
    let tempArr = [];
    item.forEach(Element => {
      tempArr.push(Element.value);
    });
    maxArr.push(Math.max(...tempArr));
    progress += 1;
    // console.log(progress + "/" + total);
  });
  return maxArr;
}
/**
 * @function xlsx2json 每 x 取最大值
 * 
 * @param options xlsx转json的配置选项
 */
function xlsx2json(options) {
  console.log(`excel2Json start!`);
  console.time("excel2Json");

  const result = excel2Json(options);

  try {
    fs.accessSync(jsonPath, fs.constants.F_OK);
    console.log('清除缓存JSON');
    fs.unlinkSync(jsonPath);
    console.log('开始写入缓存JSON');
  } catch (err) {
    console.log('开始写入缓存JSON');
  }

  fs.writeFileSync(jsonPath, JSON.stringify(result));
  console.log(`excel2Json end!`);
  console.timeEnd("excel2Json");
}

console.time("runData");
main(xlsxOptions);
console.timeEnd("runData");
