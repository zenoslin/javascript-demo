import regexpBox from "../src/main";

test("测试内网192&172网段正则", () => {
  expect(regexpBox.intranetReg("192.168.1.1")).toBeTruthy();
  expect(regexpBox.intranetReg("192.168.8.33")).toBeTruthy();
  expect(regexpBox.intranetReg("192.168.16.254")).toBeTruthy();
  expect(regexpBox.intranetReg("192.168.254.1")).toBeTruthy();
  expect(regexpBox.intranetReg("192.168.256.3")).toBeFalsy();
  expect(regexpBox.intranetReg("192.168.255.265")).toBeFalsy();
  expect(regexpBox.intranetReg("172.16.1.1")).toBeTruthy();
  expect(regexpBox.intranetReg("172.16.8.33")).toBeTruthy();
  expect(regexpBox.intranetReg("172.16.16.254")).toBeTruthy();
  expect(regexpBox.intranetReg("172.16.255.1")).toBeTruthy();
  expect(regexpBox.intranetReg("172.16.256.3")).toBeFalsy();
  expect(regexpBox.intranetReg("172.16.255.265")).toBeFalsy();
  expect(regexpBox.intranetReg("127.0.0.1")).toBeFalsy();
  expect(regexpBox.intranetReg("localhost")).toBeFalsy();
});

test("测试海外号码", () => {
  expect(regexpBox.internationaPhoneReg("1234567")).toBeTruthy();
  console.log(regexpBox.internationaPhoneReg("123456"));
  expect(regexpBox.internationaPhoneReg("123456")).toBeFalsy();
});
