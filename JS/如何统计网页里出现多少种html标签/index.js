// 获得所有标签
var doms = document.getElementsByTagName("*")
// 去重
var obj = {}
var res = []
for (var i = 0; i < doms.length; i++) {
    var name = doms[i].nodeName
    if (!obj[name]) {
        res.push(name);
        obj[name] = true
    }
}
console.log(res.length)

// ES6
var names = [...document.getElementsByTagName("*")].map(v => v.nodeName)
console.log(new Set(names).size)