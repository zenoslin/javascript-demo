"use strict";
exports.__esModule = true;
var DateUnil = (function () {
    function DateUnil() {
    }
    DateUnil.hourOffset = function () {
        return this.ins.getTimezoneOffset() / 60 - this.chinaHour;
    };
    DateUnil.minuteOffset = function () {
        return this.ins.getTimezoneOffset() - this.chinaZone;
    };
    DateUnil.getTotalTime = function (totalSeconds) {
        var date = new Date();
        date.setTime(totalSeconds * 1000);
        return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
    };
    DateUnil.format = function (totalSeconds) {
        var date = new Date();
        date.setTime(totalSeconds * 1000);
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    DateUnil.formatHMS = function (totalSeconds) {
        var date = new Date();
        date.setTime(totalSeconds * 1000);
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    DateUnil.formatHM = function (totalSeconds) {
        var date = new Date();
        date.setTime(totalSeconds * 1000);
        var hour = date.getHours();
        var timeStr = "";
        if (hour < 10) {
            timeStr += "0" + hour;
        }
        else {
            timeStr += "" + hour;
        }
        var minutes = date.getMinutes();
        if (minutes < 10) {
            timeStr += ":0" + minutes;
        }
        else {
            timeStr += ":" + minutes;
        }
        return timeStr;
    };
    DateUnil.formatLeftTimeNum = function (totalSeconds) {
        var day = Math.floor(totalSeconds / (3600 * 24));
        var todayTime = totalSeconds - day * (3600 * 24);
        var hour = Math.floor(todayTime / 3600);
        var minutes = Math.floor((todayTime - hour * 3600) / 60);
        var seconds = (todayTime - hour * 3600) % 60;
        return [day, hour, minutes, seconds];
    };
    DateUnil.formatLeftTimeStr = function (totalSeconds) {
        var day = Math.floor(totalSeconds / (3600 * 24));
        var todayTime = totalSeconds - day * (3600 * 24);
        var hour = Math.floor(todayTime / 3600);
        var minutes = Math.floor((todayTime - hour * 3600) / 60);
        var seconds = (todayTime - hour * 3600) % 60;
        return [day + "", hour < 10 ? "0" + hour : "" + hour, minutes < 10 ? "0" + minutes : "" + minutes, seconds < 10 ? "0" + seconds : "" + seconds];
    };
    DateUnil.formatLeftHorM = function (totalSeconds) {
        var hour = Math.floor(totalSeconds / 3600);
        return hour > 0 ? hour + "小时" : Math.floor(totalSeconds / 60) + "分钟";
    };
    DateUnil.formatLeftDHMS = function (totalSeconds) {
        var day = Math.floor(totalSeconds / (3600 * 24));
        var todayTime = totalSeconds - day * (3600 * 24);
        var hour = Math.floor(todayTime / 3600);
        var minutes = Math.floor((todayTime - hour * 3600) / 60);
        var seconds = (todayTime - hour * 3600) % 60;
        var timeStr = "";
        timeStr += day > 0 ? day + "天" : "";
        timeStr += hour < 10 ? "0" + hour + "时" : "" + hour + "时";
        timeStr += minutes < 10 ? "0" + minutes + "分" : "" + minutes + "分";
        timeStr += seconds < 10 ? "0" + seconds + "秒" : "" + seconds + "秒";
        return timeStr;
    };
    DateUnil.formatLeftHMS = function (totalSeconds, formatStr) {
        if (formatStr === void 0) { formatStr = null; }
        var day = Math.floor(totalSeconds / (3600 * 24));
        var todayTime = totalSeconds - day * (3600 * 24);
        var hour = Math.floor(todayTime / 3600);
        var minutes = Math.floor((todayTime - hour * 3600) / 60);
        var seconds = (todayTime - hour * 3600) % 60;
        var timeString = "";
        if (hour > 0) {
            timeString += hour < 10 ? "0" + hour.toString() + (formatStr == null ? "小时" : formatStr) : "" + hour + (formatStr == null ? "小时" : formatStr);
        }
        timeString += minutes < 10 ? "0" + minutes.toString() + (formatStr == null ? "分" : formatStr) : "" + minutes + (formatStr == null ? "分" : formatStr);
        timeString += seconds < 10 ? "0" + seconds.toString() + (formatStr == null ? "秒" : "") : "" + seconds + (formatStr == null ? "秒" : "");
        return timeString;
    };
    DateUnil.chinaHour = -8;
    DateUnil.chinaZone = -480;
    DateUnil.ins = new Date;
    return DateUnil;
}());
exports.DateUnil = DateUnil;
