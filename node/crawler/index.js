const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const request = require("superagent");
require("superagent-charset")(request);

const catalogueUrl =
  "https://www.wenku8.net/modules/article/reader.php?aid=2480";
const resultPath = path.resolve(__dirname, "./result.txt"); // 结果保存路径
let sectionUrls = [];
let sectionData = [];
let dataStr = "";

function getURL() {
  return new Promise((resolve, reject) => {
    request
      .get(catalogueUrl)
      .charset("gbk")
      .end((err, sres) => {
        if (err) {
          reject(err);
          return;
        }
        const html = sres.text;
        const $ = cheerio.load(html);
        const arr = [];
        $("td[class=ccss] a").each((index, element) => {
          const obj = {};
          obj.title = $(element).text();
          obj.url = $(element).attr("href");
          arr.push(obj);
        });
        resolve(arr);
      });
  });
}

function getSection(url) {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .charset("gbk")
      .end((err, sres) => {
        if (err) {
          reject(err);
          return;
        }
        const html = sres.text;
        const $ = cheerio.load(html);
        let obj = {};
        obj.title = $("#contentmain #title").text();
        obj.content = $("#contentmain #content").text();
        resolve(obj);
      });
  });
}

async function go() {
  console.time("crawler");
  try {
    console.log("开始解析地址");
    sectionUrls = await getURL();
    console.log("得到解析地址");
  } catch (err) {
    console.log(err);
    return;
  }
  try {
    console.log("开始获取章节");
    // 同步请求
    // for (let i = 0; i < sectionUrls.length; i++) {
    //   let section = await getSection(sectionUrls[i].url);
    //   sectionData[i] = section;
    // }
    // 异步请求
    let promiseList = sectionUrls.map(item => {
      return getSection(item.url);
    });
    sectionData = await Promise.all(promiseList);
    console.log("得到获取章节");
  } catch (err) {
    console.log(err);
    return;
  }

  if (sectionData.length > 0) {
    for (let i = 0; i < sectionData.length; i++) {
      console.log("title", sectionData[i].title);

      dataStr =
        dataStr + "\n" + sectionData[i].title + "\n" + sectionData[i].content;
    }
  } else {
    return;
  }

  try {
    fs.accessSync("resultPath", fs.constants.F_OK);
    console.log("清除结果文件");
    fs.unlinkSync(resultPath);
    console.log("开始写入结果");
  } catch (err) {
    console.error("开始写入结果");
  }
  fs.writeFileSync(resultPath, dataStr);
  console.log("写入结果完成");
  console.timeEnd("crawler");
}

go();
