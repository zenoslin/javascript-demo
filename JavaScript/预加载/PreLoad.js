/**
 * previous loading image预加载图片
 * @param {Array} imgPathList - 图片路径列表
 * @param {string} version - 插入版本号保证时效性
 */
function preLoad(imgPathList, version = 1) {
  const imgs = imgPathList;
  imgs.forEach(element => {
    const image = new Image();
    image.src = element.concat('?v=', version);
  });
}

export default preLoad;
