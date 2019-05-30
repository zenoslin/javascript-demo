export class DateUtil {
  constructor() {
    this.ins = new Date();
  }
  private chinaHour: number = -8; //中国时区
  private chinaZone: number = -480; //中国时区（分钟）
  private ins: Date;

  setYear($year: number) {
    this.ins.setFullYear($year);
    return this;
  }
  setMonth($month: number) {
    this.ins.setMonth($month - 1);
    return this;
  }
  setDay($day: number) {
    this.ins.setDate($day);
    return this;
  }
  setHours($hours: number) {
    this.ins.setHours($hours);
    return this;
  }
  setMinute($minutes: number) {
    this.ins.setMinutes($minutes);
    return this;
  }
  setSecond($seconds: number) {
    this.ins.setSeconds($seconds);
    return this;
  }
  setMillisecond($milliseconds: number) {
    this.ins.setMilliseconds($milliseconds);
    return this;
  }
  setTime($time: number) {
    this.ins.setTime($time);
    return this;
  }

  /**
   * @function hourOffset
   *
   * @return {number} 算出当地时间与中国差多少小时
   */
  hourOffset(): number {
    return this.ins.getTimezoneOffset() / 60 - this.chinaHour;
  }

  /**
   * @function minuteOffset
   *
   * @return {number} 算出当地时间与中国差多少分钟
   */
  minuteOffset(): number {
    return this.ins.getTimezoneOffset() - this.chinaZone;
  }

  /**
   * @function getTotalTime
   *
   * @return {Array<number>} 输出[年,月,日,时,分,秒]
   */
  getTotalTime(): Array<number> {
    let date: Date = this.ins;
    return [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ];
  }

  /**
   * @function format
   *
   * @return {string} 输出格式如"2018-08-08 08:08:08"
   */
  format(): string {
    let date: Date = this.ins;
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  }

  /**
   * @function formatHMS
   *
   * @return {string} 输出格式如“08:08:08”
   */
  formatHMS(): string {
    let date: Date = this.ins;
    let hours:string = date.getHours() > 9 ? "" + date.getHours() : "0" + date.getHours();
    let minutes:string = date.getMinutes() > 9 ? "" + date.getMinutes() : "0" + date.getMinutes();
    let seconds:string = date.getSeconds() > 9 ? "" + date.getSeconds() : "0" + date.getSeconds();
    return hours + ":" + minutes + ":" + seconds;
  }

  /**
   * @function formatHM
   *
   * @return {string} 输出“08:08”
   */
  formatHM(): string {
    let date: Date = this.ins;
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

  /**
   * @function formatLeftTimeNum
   *
   * @return {Array<number>} 输出剩余时间，格式[天,时,分,秒] number
   */
  formatLeftTimeNum(): Array<number> {
    let now: Date = new Date();
    let totalSeconds: number = Math.floor(
      (this.ins.getTime() - now.getTime()) / 1000
    );
    let day: number = Math.floor(totalSeconds / (3600 * 24));
    let todayTime: number = totalSeconds - day * (3600 * 24);
    let hour: number = Math.floor(todayTime / 3600);
    let minutes: number = Math.floor((todayTime - hour * 3600) / 60);
    let seconds: number = (todayTime - hour * 3600) % 60;
    return [day, hour, minutes, seconds];
  }

  /**
   * @function formatLeftTimeStr
   *
   * @return {Array<string>} 输出剩余时间，格式[天,时,分,秒] string
   */
  formatLeftTimeStr(): Array<string> {
    let now: Date = new Date();
    let totalSeconds: number = Math.floor(
      (this.ins.getTime() - now.getTime()) / 1000
    );
    let day: number = Math.floor(totalSeconds / (3600 * 24));
    let todayTime: number = totalSeconds - day * (3600 * 24);
    let hour: number = Math.floor(todayTime / 3600);
    let minutes: number = Math.floor((todayTime - hour * 3600) / 60);
    let seconds: number = (todayTime - hour * 3600) % 60;
    return [
      day + "",
      hour < 10 ? "0" + hour : "" + hour,
      minutes < 10 ? "0" + minutes : "" + minutes,
      seconds < 10 ? "0" + seconds : "" + seconds
    ];
  }

  /**
   * @function formatLeftTimeStr
   *
   * @return {string} 返回剩余时间，大于一小时则显示xx小时，小于一小时则显示xx分钟
   */
  formatLeftHorM(): string {
    let now: Date = new Date();
    let totalSeconds: number = Math.floor(
      (this.ins.getTime() - now.getTime()) / 1000
    );
    let hour: number = Math.floor(totalSeconds / 3600);
    return hour > 0 ? hour + "小时" : Math.floor(totalSeconds / 60) + "分钟";
  }

  /**
   * @function formatLeftTimeStr
   *
   * @return {string} 返回剩余时间，格式“天:时:分:秒”
   */
  formatLeftDHMS(): string {
    let now: Date = new Date();
    let totalSeconds: number = Math.floor(
      (this.ins.getTime() - now.getTime()) / 1000
    );
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

  /**
   * @function formatLeftHMS
   *
   * @param {string} formatStr 时间分割符号，默认是中文
   *
   * @returns {string} 输出剩余时间，格式“小时分秒”
   */
  formatLeftHMS(formatStr: string = null): string {
    let now: Date = new Date();
    let totalSeconds: number = Math.floor(
      (this.ins.getTime() - now.getTime()) / 1000
    );
    let day: number = Math.floor(totalSeconds / (3600 * 24));
    let todayTime: number = totalSeconds - day * (3600 * 24);
    let hour: number = Math.floor(todayTime / 3600);
    let minutes: number = Math.floor((todayTime - hour * 3600) / 60);
    let seconds: number = (todayTime - hour * 3600) % 60;
    let timeString: string = "";
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
  }
}
