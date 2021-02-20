const target = [
    {
        name: "众兴转债",
        price: 95,
        redemption: 106,
        expire: "2023-12-15",
        interests: [0.004, 0.006, 0.01, 0.015, 0.018, 0.02],
        yield: 0.04,
    },
    {
        name: "明电转债",
        price: 100,
        redemption: 115,
        expire: "2026-12-15",
        interests: [0.004, 0.008, 0.01, 0.015, 0.025, 0.03],
        yield: 0.04,
    },
];

/**
 * 最小价格
 * @param {number} redemption
 * @param {string | Date} expire
 * @param {Array<number>} interests
 * @param {number} yield
 */
const costMinPrice = (redemption, expire, interests, yield) => {
    const distance = Math.ceil(
        (new Date(expire).getTime() - Date.now()) / (365 * 24 * 60 * 60 * 1000)
    );
    const interestList = interests.map((value, index) => {
        let tempCount = value;
        for (let i = index + 1; i < interests.length; i++) {
            tempCount = tempCount * (1 + interests[i]);
        }
        return tempCount;
    });
    const interestRise = interestList
        .reverse()
        .slice(0, distance)
        .reduce((a, b) => a + b, 0);
    return redemption / ((yield - interestRise / distance) * distance + 1);
};

const getYearYield = (price, redemption, expire, interests) => {
    const distance = Math.ceil(
        (new Date(expire).getTime() - Date.now()) / (365 * 24 * 60 * 60 * 1000)
    );
    const interestList = interests.map((value, index) => {
        let tempCount = value;
        for (let i = index + 1; i < interests.length; i++) {
            tempCount = tempCount * (1 + interests[i]);
        }
        return tempCount;
    });
    const interestRise = interestList
        .reverse()
        .slice(0, distance)
        .reduce((a, b) => a + b, 0);
    return (redemption / price + interestRise - 1) / distance;
};

const main = () => {
    const res = target.map((item) => {
        return {
            name: item.name,
            yearYield: `${
                Math.floor(
                    getYearYield(
                        item.price,
                        item.redemption,
                        item.expire,
                        item.interests
                    ) * 10000
                ) / 100
            }%`,
            minPrice: costMinPrice(
                item.redemption,
                item.expire,
                item.interests,
                item.yield
            ),
        };
    });
    console.log(res);
};

main();
