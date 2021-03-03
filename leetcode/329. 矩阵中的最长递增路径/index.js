// 记忆化深度优先搜索
const longestIncreasingPath = (matrix) => {
    if (matrix.length === 0) return 0; // 矩阵中没有元素
    // 上下左右
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    // 矩阵长宽
    const m = matrix.length;
    const n = matrix[0].length;
    // 缓存dfs结果
    const memo = new Array(m);
    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n);
    }
    // 找出每个元素的最大距离
    const dfs = (matrix, i, j, m, n, memo) => {
        if (memo[i][j]) return memo[i][j];
        let max = 1;
        for (let k = 0; k < 4; k++) {
            const x = i + dx[k];
            const y = j + dy[k];
            if (
                x >= 0 &&
                x < m &&
                y >= 0 &&
                y < n &&
                matrix[x][y] > matrix[i][j]
            ) {
                max = Math.max(max, 1 + dfs(matrix, x, y, m, n, memo));
            }
        }
        return (memo[i][j] = max);
    };
    // 遍历缓存区拿到最佳结果
    let res = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(res, dfs(matrix, i, j, m, n, memo));
        }
    }
    return res;
};

console.log(
    longestIncreasingPath([
        [9, 9, 4],
        [6, 6, 8],
        [2, 1, 1],
    ])
);
console.log(
    longestIncreasingPath([
        [
            [3, 4, 5],
            [3, 2, 6],
            [2, 2, 1],
        ],
    ])
);
console.log(longestIncreasingPath([[1]]));
