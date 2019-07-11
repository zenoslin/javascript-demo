const fs = require("fs");
const path = require("path");

const removeFile = ($path, callback) => {
  fs.readdir($path, (err, files) => {
    removeNext(files, 0, $path, callback);
  });
};

const removeNext = (files, index, $path, callback) => {
  if (index == files.length) return fs.rmdir($path, callback);
  let _dir = path.join($path, files[index]);
  fs.stat(_dir, (err, stat) => {
    if (stat.isDirectory()) {
      removeFile(_dir, () => {
        removeNext(files, index + 1, $path, callback);
      });
    } else {
      fs.unlink(_dir, () => {
        removeNext(files, index + 1, $path, callback);
      });
    }
  });
};

const removeFileSync = $path => {
  return new Promise((resolve, reject) => {
    let arr = [$path];
    let current = null;
    let index = 0;

    while ((current = arr[index++])) {
      let stat = fs.statSync(current);
      if (stat.isDirectory()) {
        let files = fs.readdirSync(current);
        arr = [...arr, ...files.map(file => path.join(current, file))];
      }
    }
    for (var i = arr.length - 1; i >= 0; i--) {
      let stat = fs.statSync(arr[i]);
      if (stat.isDirectory()) {
        fs.rmdirSync(arr[i]);
      } else {
        fs.unlinkSync(arr[i]);
      }
    }
    resolve($path);
  });
};

module.exports = {
  removeFile,
  removeFileSync
};
