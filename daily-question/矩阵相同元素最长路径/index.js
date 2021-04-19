const longestSamePath = (matrix) => {
    if (matrix.length === 0) return 0;

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const m = matrix.length;
    const n = matrix[0].length;

    const dfs = (matrix, i, j, m, n, mark) => {
        mark[i][j] = true;
        let max = 1;
        for (let k = 0; k < 4; k++) {
            const x = i + dx[k];
            const y = j + dy[k];
            if (
                x >= 0 &&
                x < m &&
                y >= 0 &&
                y < n &&
                !mark[x][y] &&
                matrix[x][y] === matrix[i][j]
            ) {
                max = Math.max(max, 1 + dfs(matrix, x, y, m, n, mark));
            }
        }
        return max;
    };

    let res = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const mark = new Array(m);
            for (let k = 0; k < m; k++) {
                mark[k] = new Array(n);
            }
            res = Math.max(res, dfs(matrix, i, j, m, n, mark));
        }
    }
    return res;
};

console.log(
    longestSamePath([
        [1, 2, 1, 1],
        [1, 2, 3, 2],
        [2, 2, 2, 4],
        [1, 3, 2, 4],
    ])
);
