/**
 *  A星寻路
 * */

// 测试用例
let map = [
    [0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 1, 1, 1, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0]
    [0, 1, 0, 1, 1, 1, 1, 1]
    [0, 1, 0, 0, 0, 0, 0, 0]
    [0, 1, 0, 0, 0, 0, 1, 0]
    [0, 1, 0, 0, 0, 0, 1, 0]
    [0, 0, 0, 0, 0, 0, 0, 0]
]

for (let x = 0; x < 8; x++) {
    for(let y = 0; y < 8; y++) {
        let obj = {
            data: [x, y]
        }
    }
}

let start = [0, 0]
let end = [8, 6]
let openList = [[0, 0]]
let closeList = []

while (openList.length > 0) {

}