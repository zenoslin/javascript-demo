/**
 * @function getImageInfo
 * @param {File} file
 * @returns {object} {width, height}
 */
function getImageInfo(file) {
  return new Promise((resolve, reject) => {
    const isJPG = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJPG) {
      reject(new Error("File not jpg/png"));
    }
    let reader = new FileReader();
    reader.onload = () => {
      let img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        resolve({ width: width, height: height });
      };
      img.onerror = function() {
        reject(new Error("Could not load image at " + url));
      };
      img.src = reader.result;
    };
    reader.onerror = () => {
      reject(new Error("Could not load file at " + file));
    };
    reader.readAsDataURL(file);
  });
}

function readFileAsync(file) {
  return new Promise(function(resolve, reject) {
    const reader = new FileReader();
    reader.onload = function() {
      resolve(reader);
    };
    reader.onerror = function() {
      reject(new Error("Could not load file at " + file));
    };
    reader.readAsDataURL(file);
  });
}

function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      reject(new Error("Could not load image at " + url));
    };
    image.src = url;
  });
}
