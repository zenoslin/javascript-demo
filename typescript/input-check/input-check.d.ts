export declare class inputCheck {
    constructor($content?: string);
    private input;
    private errorMessage;
    private isPass;
    setInput($input: string): this;
    isEmpty($message: string): this;
    minLength($length: number, $message: string): this;
    maxLength($length: number, $message: string): this;
    isEmail($message: string): this;
    isURL($message: string): this;
    requireRegexp($reg: RegExp, $message: string): this;
}
