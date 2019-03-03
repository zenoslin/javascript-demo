$.ajax({
    url: "http://crossdomain.com/jsonServerResponse",
    dataType: "jsonp",
    type: "get", //可以省略
    jsonpCallback: "show", //->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
    jsonp: "callback", //->把传递函数名的那个形参callback，可省略
    success: function (data) {
        console.log(data);
    }
});