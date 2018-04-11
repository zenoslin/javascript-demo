// 基本类型去重
function unique(arr) {
  return arr.filter(function (element, index) {
    return arr.indexOf(element) === index;
  });
}

// 基本+复杂类型去重
function unique(arr) {
  var hash = {};
  return arr.filter(function (element) {
    if (hash.hasOwnProperty(element)) {
      return false;
    }
    hash[element] = true;
    return true;
  });
}
