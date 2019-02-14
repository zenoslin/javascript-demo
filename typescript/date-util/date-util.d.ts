declare class DateUnil {
    private static chinaHour;
    private static chinaZone;
    private static ins;
    static hourOffset(): number; //算出当地时间与中国差多少小时
    static minuteOffset(): number; //算出当地时间与中国差多少分钟
    static getTotalTime(totalSeconds: number): Array<number>; //输入1970年1月1日以来的秒数，输出[年,月,日,时,分,秒]
    static format(totalSeconds: number): string; //输入1970年1月1日以来的秒数，输出格式如"2018-08-08 08:08:08"
    static formatHMS(totalSeconds: number): string; //输入1970年1月1日以来的秒数，输出格式如“08:08:08”
    static formatHM(totalSeconds: number): string; //输入1970年1月1日以来的秒数，输出“08:08”
    static formatLeftTimeNum(totalSeconds: number): Array<number>; //输入秒数，输出剩余时间，格式[天,时,分,秒] number
    static formatLeftTimeStr(totalSeconds: number): Array<string>; //输入秒数，输出剩余时间，格式[天,时,分,秒] string
    static formatLeftHorM(totalSeconds: number): string; //输入秒数，返回剩余时间，大于一小时则显示xx小时，小于一小时则显示xx分钟
    static formatLeftDHMS(totalSeconds: number): string; //输入秒数，返回剩余时间，格式“天:时:分:秒”
    static formatLeftHMS(totalSeconds: number, formatStr?: string): string; //输入秒数，输出剩余时间，格式“小时分秒”
}
export { DateUnil };
