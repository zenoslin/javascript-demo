export class InputCheck {
  constructor($content: string = "") {
    this.input = $content;
    this.errorMessage = "没有通过校验";
    this.isPass = true;
  }

  private input: string;
  private errorMessage: string;
  private isPass: boolean;

  setInput($input: string) {
    this.input = $input;
    this.isPass = true;
    return this;
  }

  isEmpty($message: string) {
    if (!this.isPass) return this;

    if (
      /^\s*$/g.test(this.input) ||
      this.input === null ||
      this.input === undefined
    ) {
      this.errorMessage = $message;
      this.isPass = false;
    }
    return this;
  }

  minLength($length: number, $message: string) {
    if (!this.isPass) return this;

    if (this.input.length < $length) {
      this.errorMessage = $message;
      this.isPass = false;
    }
    return this;
  }

  maxLength($length: number, $message: string) {
    if (!this.isPass) return this;

    if (this.input.length > $length) {
      this.errorMessage = $message;
      this.isPass = false;
    }
    return this;
  }

  isEmail($message: string) {
    if (!this.isPass) return this;

    const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if (!emailReg.test(this.input)) {
      this.errorMessage = $message;
      this.isPass = false;
    }
    return this;
  }

  isURL($message: string) {
    if (!this.isPass) return this;
    const urlReg = new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    );
    if (!urlReg.test(this.input)) {
      this.errorMessage = $message;
      this.isPass = false;
    }
    return this;
  }

  // 自定义正则校验
  requireRegexp($reg: RegExp, $message: string) {
    if (!this.isPass) return this;
    if (!$reg.test(this.input)) {
      this.errorMessage = $message;
      this.isPass = false;
    }
    return this;
  }
}
