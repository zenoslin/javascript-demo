/**
 *  A星寻路（伪代码）
 *  F = G + H
 *  G 已移动量
 *  H 预计移动量
 * */

// 伪代码
let a; //声明开始点并添加到openlist
while (a) {
    //从openlist中获得F分数最低的正方形
    //将这个正方形添加到closelist
    //将它从openlist中删除
    if (b) { //如果我们把目标方块加入到closelist中后，有终点方块则找到路径
        //中断循环
    }
    //检索可以行走的相邻方块
    for (var i;i<z;i++) { //遍历相邻的方块
        if (c) { //如果相邻方块已经在关闭列表中，
            //忽略它
        } else if (c) { //如果它不再打开列表中
            //计算得分，设置父级
            //并将其添加到打开列表中
        } else { //如果它在打开列表中
            //对比它的G值+1是否大于父级方块，如果是，则表示这是正确的路径
        }
    }
} //继续直到openlist中没有可用的方块(没有到达终点路径)