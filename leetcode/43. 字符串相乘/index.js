const multiply = (num1, num2) => {
    const len1 = num1.length;
    const len2 = num2.length;
    let pos = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        const numA = +num1[i];
        for (let j = len2 - 1; j >= 0; j--) {
            const numB = +num2[j];
            const mult = numA * numB;
            let sum = pos[i + j + 1] + mult;

            pos[i + j + 1] = sum % 10;
            pos[i + j] += (sum / 10) | 0;
        }
    }

    while (pos[0] == 0) {
        pos.shift();
    }
    return pos.length > 0 ? pos.join("") : "0";
};

console.log(multiply("2", "3"));
console.log(multiply("123", "456"));
