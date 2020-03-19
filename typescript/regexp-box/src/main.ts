const intranetReg = (ip: string) => {
  return /^(172\.(1[6-9]|2\d|3[01])\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d))$|^(192\.168\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d))$/.test(ip);
};

const internationaPhoneReg = (number:string) => {
    return /^[0-9]{7}$/.test(number);
}

export default {
  intranetReg,
  internationaPhoneReg
};