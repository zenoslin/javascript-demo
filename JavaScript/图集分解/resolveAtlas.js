/**
 * @function resolveAtlas 
 * 分解序列帧动画图集
 * 
 * @param {string} $url 
 * @param {object} $json 
 * 
 * @return {Promise}
 */
export async function resolveAtlas($url, $json) {
  let frames = $json.frames;
  let keyArr = Object.keys(frames);
  let promiseArr = [];
  for (let i = 0; i < keyArr.length; i++) {
    let info = frames[`${i}.png`].frame;
    promiseArr.push(getImage($url, info.x, info.y, info.w, info.h));
  }
  let data = await Promise.all(promiseArr);
  return data;
}

function getImage($url, $x, $y, $width, $height) {
  return new Promise(function(resolve, reject) {
    const img = new Image();
    let canvas = document.createElement('canvas');
    canvas.width = $width;
    canvas.height = $height;
    let ctx = canvas.getContext('2d');
    img.onload = function() {
      ctx.drawImage(img, $x, $y, $width, $height, 0, 0, $width, $height);
      resolve(canvas.toDataURL());
    };
    img.onerror = function() {
      reject(new Error('Could not load image at ' + $url));
    };
    img.src = $url;
  });
}
