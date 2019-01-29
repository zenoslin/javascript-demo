let socket = new WebSocket('ws://localhost:3000');
socket.onopen = function () {
    socket.send('我爱你'); //向服务器发送数据
}
socket.onmessage = function (e) {
    console.log(e.data); //接收服务器返回的数据
}