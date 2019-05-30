export declare class DateUtil {
    constructor();
    private chinaHour;
    private chinaZone;
    private ins;
    setYear($year: number): this;
    setMonth($month: number): this;
    setDay($day: number): this;
    setHours($hours: number): this;
    setMinute($minutes: number): this;
    setSecond($seconds: number): this;
    setMillisecond($milliseconds: number): this;
    setTime($time: number): this;
    hourOffset(): number;
    minuteOffset(): number;
    getTotalTime(): Array<number>;
    format(): string;
    formatHMS(): string;
    formatHM(): string;
    formatLeftTimeNum(): Array<number>;
    formatLeftTimeStr(): Array<string>;
    formatLeftHorM(): string;
    formatLeftDHMS(): string;
    formatLeftHMS(formatStr?: string): string;
}
