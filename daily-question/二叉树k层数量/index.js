function countNodeNum(nodeTree, k) {
    if (!nodeTree || k < 0) return 0;
    if (k === 0) return 1;
    const numLeft = countNodeNum(nodeTree.left, k - 1);
    const numRight = countNodeNum(nodeTree.right, k - 1);
    return numLeft + numRight;
}

const nodetree = {
    value: 1,
    left: { 
        value: 1,
        left: { value: 1, right: null, left: null }, 
        right: null },
    right: { 
        value: 1, 
        left: null, 
        right: null },
};

console.log(countNodeNum(nodetree, 0))
console.log(countNodeNum(nodetree, 1))
console.log(countNodeNum(nodetree, 2))
