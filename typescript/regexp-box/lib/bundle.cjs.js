'use strict';

var intranetReg = function (ip) {
    return new RegExp("^(172.((1[6-9])|(2d)|(3[01])).d{1,3}.d{1,3})|(192.168.d{1,3}.d{1,3})$").test(ip);
};
var main = {
    intranetReg: intranetReg
};

module.exports = main;
//# sourceMappingURL=bundle.cjs.js.map
