function unique5(array){
  var r = [];
  for(var i = 0, l = array.length; i < l; i++) {
    for(var j = i + 1; j < l; j++)
      if (array[i] === array[j]) j = ++i;
    r.push(array[i]);
  }
  return r;
}

var arr = [1,2,3,4,5,6,2,5];
var rel = unique5(arr);
console.log(rel);
