const fs = require("fs");

/**
 * @function 复制文件（同步）
 * 可以在.then做复制完成之后的操作
 * @example copyFileSync(src, dist).then(res=>{console.log('复制完成')})
 *
 * @param {string} src
 * @param {string} dist
 * 
 * @return {Promise}
 */
const copyFileSync = async function(src, dist) {
  return new Promise(async (resolve, reject) => {
    let start = new Date().getTime();
    await checkDirectory(src, dist);
    await copySync(src, dist);
    let res = { src: src, time: new Date().getTime() - start };
    resolve(res);
  });
};

/**
 * @function 复制文件（异步）
 *
 * @param {string} src
 * @param {string} dist
 */
const copyFile = async function(src, dist) {
  await checkDirectory(src, dist);
  copy(src, dist);
};

const checkDirectory = function(src, dist) {
  return new Promise((resolve, reject) => {
    fs.access(dist, fs.constants.F_OK, err => {
      if (err) {
        fs.mkdirSync(dist);
      }
      resolve(src);
    });
  });
};

const copySync = async function(src, dist) {
  let paths = fs.readdirSync(src);
  for (const path of paths) {
    let _src = src + "/" + path;
    let _dist = dist + "/" + path;
    let _stats = fs.statSync(_src);
    if (_stats.isFile()) {
      let readable = fs.createReadStream(_src);
      let writable = fs.createWriteStream(_dist);
      readable.pipe(writable);
    } else if (_stats.isDirectory()) {
      await checkDirectory(_src, _dist);
      await copySync(_src, _dist);
    }
  }
};

const copy = async function(src, dist) {
  let paths = fs.readdirSync(src);
  for (const path of paths) {
    let _src = src + "/" + path;
    let _dist = dist + "/" + path;
    let _stats = fs.statSync(_src);
    if (_stats.isFile()) {
      let readable = fs.createReadStream(_src);
      let writable = fs.createWriteStream(_dist);
      readable.pipe(writable);
    } else if (_stats.isDirectory()) {
      checkDirectory(_src, _dist).then(res => {
        copy(_src, _dist);
      });
    }
  }
};

module.exports = {
  copyFileSync,
  copyFile
};
