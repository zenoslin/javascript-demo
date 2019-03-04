var obj = {};
Object.defineProperty(obj, "name", {
    get: function () {
        console.log('获取name')
        return document.querySelector('#name').innerHTML;
    },
    set: function (nick) {
        console.log('设置name')
        document.querySelector('#name').innerHTML = nick;
    }
});

obj.name = "zenos";
console.log(obj.name)