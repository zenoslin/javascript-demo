function parseQueryString(url) {
	var json = {};
	var arr = url.substr(url.indexOf('?') + 1).split('&');
	arr.forEach(function(item) {
			var tmp = item.split('=');
			json[tmp[0]] = tmp[1];
	})
	return json;
}

var url = "http://witmax.cn/index.php?key0=0&key1=1&key2=2";
var json = parseQueryString(url);
console.log(json);
