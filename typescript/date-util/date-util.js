"use strict";
exports.__esModule = true;
var DateUnil = (function () {
    function DateUnil() {
        this.chinaHour = -8;
        this.chinaZone = -480;
        this.ins = new Date();
    }
    DateUnil.prototype.setYear = function ($year) {
        this.ins.setFullYear($year);
        return this;
    };
    DateUnil.prototype.setMonth = function ($month) {
        this.ins.setMonth($month - 1);
        return this;
    };
    DateUnil.prototype.setDay = function ($day) {
        this.ins.setDate($day);
        return this;
    };
    DateUnil.prototype.setHours = function ($hours) {
        this.ins.setHours($hours);
        return this;
    };
    DateUnil.prototype.setMinute = function ($minutes) {
        this.ins.setMinutes($minutes);
        return this;
    };
    DateUnil.prototype.setSecond = function ($seconds) {
        this.ins.setSeconds($seconds);
        return this;
    };
    DateUnil.prototype.setMillisecond = function ($milliseconds) {
        this.ins.setMilliseconds($milliseconds);
        return this;
    };
    DateUnil.prototype.setTime = function ($time) {
        this.ins.setTime($time);
        return this;
    };
    DateUnil.prototype.hourOffset = function () {
        return this.ins.getTimezoneOffset() / 60 - this.chinaHour;
    };
    DateUnil.prototype.minuteOffset = function () {
        return this.ins.getTimezoneOffset() - this.chinaZone;
    };
    DateUnil.prototype.getTotalTime = function () {
        var date = this.ins;
        return [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ];
    };
    DateUnil.prototype.format = function () {
        var date = this.ins;
        return (date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds());
    };
    DateUnil.prototype.formatHMS = function () {
        var date = this.ins;
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    DateUnil.prototype.formatHM = function () {
        var date = this.ins;
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
    DateUnil.prototype.formatLeftTimeNum = function () {
        var now = new Date();
        var totalSeconds = Math.floor((this.ins.getTime() - now.getTime()) / 1000);
        var day = Math.floor(totalSeconds / (3600 * 24));
        var todayTime = totalSeconds - day * (3600 * 24);
        var hour = Math.floor(todayTime / 3600);
        var minutes = Math.floor((todayTime - hour * 3600) / 60);
        var seconds = (todayTime - hour * 3600) % 60;
        return [day, hour, minutes, seconds];
    };
    DateUnil.prototype.formatLeftTimeStr = function () {
        var now = new Date();
        var totalSeconds = Math.floor((this.ins.getTime() - now.getTime()) / 1000);
        var day = Math.floor(totalSeconds / (3600 * 24));
        var todayTime = totalSeconds - day * (3600 * 24);
        var hour = Math.floor(todayTime / 3600);
        var minutes = Math.floor((todayTime - hour * 3600) / 60);
        var seconds = (todayTime - hour * 3600) % 60;
        return [
            day + "",
            hour < 10 ? "0" + hour : "" + hour,
            minutes < 10 ? "0" + minutes : "" + minutes,
            seconds < 10 ? "0" + seconds : "" + seconds
        ];
    };
    DateUnil.prototype.formatLeftHorM = function () {
        var now = new Date();
        var totalSeconds = Math.floor((this.ins.getTime() - now.getTime()) / 1000);
        var hour = Math.floor(totalSeconds / 3600);
        return hour > 0 ? hour + "小时" : Math.floor(totalSeconds / 60) + "分钟";
    };
    DateUnil.prototype.formatLeftDHMS = function () {
        var now = new Date();
        var totalSeconds = Math.floor((this.ins.getTime() - now.getTime()) / 1000);
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
    DateUnil.prototype.formatLeftHMS = function (formatStr) {
        if (formatStr === void 0) { formatStr = null; }
        var now = new Date();
        var totalSeconds = Math.floor((this.ins.getTime() - now.getTime()) / 1000);
        var day = Math.floor(totalSeconds / (3600 * 24));
        var todayTime = totalSeconds - day * (3600 * 24);
        var hour = Math.floor(todayTime / 3600);
        var minutes = Math.floor((todayTime - hour * 3600) / 60);
        var seconds = (todayTime - hour * 3600) % 60;
        var timeString = "";
        if (hour > 0) {
            timeString +=
                hour < 10
                    ? "0" + hour.toString() + (formatStr == null ? "小时" : formatStr)
                    : "" + hour + (formatStr == null ? "小时" : formatStr);
        }
        timeString +=
            minutes < 10
                ? "0" + minutes.toString() + (formatStr == null ? "分" : formatStr)
                : "" + minutes + (formatStr == null ? "分" : formatStr);
        timeString +=
            seconds < 10
                ? "0" + seconds.toString() + (formatStr == null ? "秒" : "")
                : "" + seconds + (formatStr == null ? "秒" : "");
        return timeString;
    };
    return DateUnil;
}());
exports.DateUnil = DateUnil;
