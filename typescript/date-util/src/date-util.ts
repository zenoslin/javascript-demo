class DateUnil {
    private static chinaHour: number = -8; //中国时区
    private static chinaZone: number = -480; //中国时区（分钟）
    private static ins: Date = new Date;

    //算出当地时间与中国差多少小时
    static hourOffset(): number {
        return this.ins.getTimezoneOffset() / 60 - this.chinaHour;
    }

    //算出当地时间与中国差多少分钟
    static minuteOffset(): number {
        return this.ins.getTimezoneOffset() - this.chinaZone;
    }


    //输入1970年1月1日以来的秒数，输出[年,月,日,时,分,秒]
    static getTotalTime(totalSeconds: number): Array < number > {
        let date: Date = new Date();
        date.setTime(totalSeconds * 1000);
        return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
    }

    //输入1970年1月1日以来的秒数，输出格式如"2018-08-08 08:08:08"
    static format(totalSeconds: number): string {
        let date: Date = new Date();
        date.setTime(totalSeconds * 1000);
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    //输入1970年1月1日以来的秒数，输出格式如“08:08:08”
    static formatHMS(totalSeconds: number): string {
        let date: Date = new Date();
        date.setTime(totalSeconds * 1000);
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    //输入1970年1月1日以来的秒数，输出“08:08”
    static formatHM(totalSeconds: number): string {
        let date: Date = new Date();
        date.setTime(totalSeconds * 1000);
        let hour: number = date.getHours();
        let timeStr: string = "";
        if (hour < 10) {
            timeStr += "0" + hour;
        } else {
            timeStr += "" + hour;
        }
        let minutes: number = date.getMinutes();
        if (minutes < 10) {
            timeStr += ":0" + minutes;
        } else {
            timeStr += ":" + minutes;
        }
        return timeStr;
    }

    //输入秒数，输出剩余时间，格式[天,时,分,秒] number
    static formatLeftTimeNum(totalSeconds:number):Array<number> {
        var day:number = Math.floor(totalSeconds / (3600 * 24));
        var todayTime:number = totalSeconds - day * (3600 * 24);
        var hour:number = Math.floor(todayTime / 3600);
        var minutes:number = Math.floor((todayTime - hour * 3600) / 60);
        var seconds:number = (todayTime - hour * 3600) % 60;
        return [day, hour, minutes, seconds];
    }

    //输入秒数，输出剩余时间，格式[天,时,分,秒] string
    static formatLeftTimeStr(totalSeconds:number):Array<string> {
        var day:number = Math.floor(totalSeconds / (3600 * 24));
        var todayTime:number = totalSeconds - day * (3600 * 24);
        var hour:number = Math.floor(todayTime / 3600);
        var minutes:number = Math.floor((todayTime - hour * 3600) / 60);
        var seconds:number = (todayTime - hour * 3600) % 60;
        return [day + "", hour < 10 ? "0" + hour : "" + hour, minutes < 10 ? "0" + minutes : "" + minutes, seconds < 10 ? "0" + seconds : "" + seconds];
    }

    //输入秒数，返回剩余时间，大于一小时则显示xx小时，小于一小时则显示xx分钟
    static formatLeftHorM(totalSeconds: number): string {
        let hour: number = Math.floor(totalSeconds / 3600);
        return hour > 0 ? hour + "小时" : Math.floor(totalSeconds / 60) + "分钟"
    }

    //输入秒数，返回剩余时间，格式“天:时:分:秒”
    static formatLeftDHMS(totalSeconds: number): string {
        let day: number = Math.floor(totalSeconds / (3600 * 24));
        let todayTime: number = totalSeconds - day * (3600 * 24);
        let hour: number = Math.floor(todayTime / 3600);
        let minutes: number = Math.floor((todayTime - hour * 3600) / 60);
        let seconds: number = (todayTime - hour * 3600) % 60;
        let timeStr: string = "";
        timeStr += day > 0 ? day + "天" : "";
        timeStr += hour < 10 ? "0" + hour + "时" : "" + hour + "时";
        timeStr += minutes < 10 ? "0" + minutes + "分" : "" + minutes + "分";
        timeStr += seconds < 10 ? "0" + seconds + "秒" : "" + seconds + "秒";
        return timeStr;
    }

    //输入秒数，输出剩余时间，格式“小时分秒”
    static formatLeftHMS(totalSeconds: number, formatStr: string = null): string {
        var day: number = Math.floor(totalSeconds / (3600 * 24));
        var todayTime: number = totalSeconds - day * (3600 * 24);
        var hour: number = Math.floor(todayTime / 3600);
        var minutes: number = Math.floor((todayTime - hour * 3600) / 60);
        var seconds: number = (todayTime - hour * 3600) % 60;
        var timeString: string = "";
        if (hour > 0) {
            timeString += hour < 10 ? "0" + hour.toString() + (formatStr == null ? "小时" : formatStr) : "" + hour + (formatStr == null ? "小时" : formatStr);
        }
        timeString += minutes < 10 ? "0" + minutes.toString() + (formatStr == null ? "分" : formatStr) : "" + minutes + (formatStr == null ? "分" : formatStr);
        timeString += seconds < 10 ? "0" + seconds.toString() + (formatStr == null ? "秒" : "") : "" + seconds + (formatStr == null ? "秒" : "");
        return timeString;
    }
}
export {
    DateUnil
}