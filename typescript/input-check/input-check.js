"use strict";
exports.__esModule = true;
var inputCheck = (function () {
    function inputCheck($content) {
        if ($content === void 0) { $content = ""; }
        this.input = $content;
        this.errorMessage = "没有通过校验";
        this.isPass = true;
    }
    inputCheck.prototype.setInput = function ($input) {
        this.input = $input;
        this.isPass = true;
        return this;
    };
    inputCheck.prototype.isEmpty = function ($message) {
        if (!this.isPass)
            return this;
        if (/^\s*$/g.test(this.input) ||
            this.input === null ||
            this.input === undefined) {
            this.errorMessage = $message;
            this.isPass = false;
        }
        return this;
    };
    inputCheck.prototype.minLength = function ($length, $message) {
        if (!this.isPass)
            return this;
        if (this.input.length < $length) {
            this.errorMessage = $message;
            this.isPass = false;
        }
        return this;
    };
    inputCheck.prototype.maxLength = function ($length, $message) {
        if (!this.isPass)
            return this;
        if (this.input.length > $length) {
            this.errorMessage = $message;
            this.isPass = false;
        }
        return this;
    };
    inputCheck.prototype.isEmail = function ($message) {
        if (!this.isPass)
            return this;
        var emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        if (!emailReg.test(this.input)) {
            this.errorMessage = $message;
            this.isPass = false;
        }
        return this;
    };
    inputCheck.prototype.isURL = function ($message) {
        if (!this.isPass)
            return this;
        var urlReg = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i");
        if (!urlReg.test(this.input)) {
            this.errorMessage = $message;
            this.isPass = false;
        }
        return this;
    };
    inputCheck.prototype.requireRegexp = function ($reg, $message) {
        if (!this.isPass)
            return this;
        if (!$reg.test(this.input)) {
            this.errorMessage = $message;
            this.isPass = false;
        }
        return this;
    };
    return inputCheck;
}());
exports.inputCheck = inputCheck;
