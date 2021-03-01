const add = (a, b) => {
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, "0");
    b = b.padStart(maxLength, "0");
    let t = "";
    let f = "";
    let sum = "";
    for (let i = maxLength - 1; i >= 0; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + f;
        f = Math.floor(t / 10);
        sum = (t % 10) + sum;
    }
    if (f == 1) {
        sum = "1" + sum;
    }
    return sum;
};

module.exports = add;

// console.log(add("9007199254740991", "1234567899999999999")); // 1243575099254740990
// console.log(add("678", "789")); // 1467
