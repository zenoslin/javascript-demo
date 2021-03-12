/**
 * @author       Zenos Lin <zenoslin@outlook.com>
 * @copyright    2021 Zenos Lin.
 */

/**
 * @name parseParam 解析 URL 参数
 * @param {string} url 需要解析的url 默认location.href
 * @returns {object} url参数对象
 */
const parseParam = (url = window.location.href) => {
    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串提出来
    const paramsArr = paramsStr.split("&");
    return paramsArr.reduce((pre, param) => {
        if (/=/.test(param)) {
            const splitIdx = param.indexOf("="); // 切割 key 和 value
            const key = param.substring(0, splitIdx);
            let val = param.substring(splitIdx + 1);
            val = decodeURIComponent(val); // url解码
            val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否是数字
            pre[key] = val; // 默认取同名 key 的最后一个 value
        } else {
            if (!!param) pre[param] = true; // 处理没有 value 的参数
        }
        return pre;
    }, {});
};

const test = () => {
    console.log(
        parseParam("https://www.zenoslin.top?a=1&b=2&c=asda/asda/asda==&d&")
    ); // { a: 1, b: 2, c: 'asda/asda/asda==', d: true }
};
test();
