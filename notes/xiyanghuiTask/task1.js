// 请用 javascript 实现一个函数 parseUrl(url)，将一段 url 字符串解析为 Object。

function parseUrl (url) {
	let obj = document.createElement('a');
	obj.href = url;
	return {
		protocol: obj.protocol.replace(':',''),
		host: obj.host,
		path: obj.pathname.replace(/^([^\/])/,'/$1'),
		query: (function parseQueryString() {
					let json = {};
					let arr = obj.search.replace(/^\?/,'').split('&');
					arr.forEach((item) => {
						let tmp = item.split('=');
						json[tmp[0]] = tmp[1];
					})
					return json;
				})(),
		hash: obj.hash.replace('#','')
	};
}
