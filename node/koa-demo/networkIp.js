const os = require('os');

module.exports = (function() {
    let ip = 'localhost'; // 打开的host
    try {
        // 获得网络接口列表
        let network = os.networkInterfaces();
        let reg = /^(172\.(1[6-9]|2\d|3[01])\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d))$|^(192\.168\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d))$/;
        for (let dev in network) {
            let iface = network[dev];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (alias.family === 'IPv4' && reg.test(alias.address) && !alias.internal) {
                    ip = alias.address;
                }
            }
        }
    } catch (e) {
        ip = 'localhost';
    }
    return ip;
})();
