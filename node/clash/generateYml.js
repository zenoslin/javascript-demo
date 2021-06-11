const axios = require("axios");
const Buffer = require("buffer").Buffer;

const POINTTYPE_SS = 1;
const POINTTYPE_VMESS = 2;

const atob = (data) => Buffer.from(data, "base64").toString("ascii");

const formatSs = (element) => {
  const content = atob(element.match(/(?<=:\/\/).*?(?=#)/)[0]);
  return {
    ps: /(?<=#).*$/.exec(element)[0],
    add: /(?<=@).*$/.exec(content)[0],
    encode: /.*?(?=:)/.exec(content)[0],
    password: content.match(/(?<=:).*?(?=@)/)[0],
  };
};
const formatVmess = (element) =>
  JSON.parse(atob(/(?<=:\/\/).*$/.exec(element)[0]));

const format = (data) => {
  let subStr = atob(data);
  let subArr = subStr.split("\n");
  subArr = subArr.map((element) => {
    return {
      type: /^ss:\/\/.*$/.test(element) ? POINTTYPE_SS : POINTTYPE_VMESS,
      value: /^ss:\/\/.*$/.test(element)
        ? formatSs(element)
        : formatVmess(element),
    };
  });
  console.log(subArr);
};

const main = async (url) => {
  try {
    const { data } = await axios.get(url);
    format(data);
  } catch (err) {
    console.error(err);
  }
};
