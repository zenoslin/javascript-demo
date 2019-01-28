/*
 * 参考自https://juejin.im/post/5c460109e51d4505171c7001
 */


const originParams = {
    cover: '', // 中心的封面图
    size: 500, // 画布 canvas 的尺寸
    radius: 100, // 封面图，中心圆的半径，小于零则为容器的百分比
    interval: [500, 1500], // 涟漪出现的最小频率（毫秒）
    centerColor: '#ddd', // 封面图位置的颜色（在没有封面图时显示）
    borderWidth: 5, //  封面图边框的宽度
    borderColor: '#aaa', // 封面图边框的颜色
    rippleWidth: 4, // 涟漪圆环的宽度
    rippleColor: '#fff', // 涟漪颜色
    pointRadius: 8, // 涟漪圆点的半径
    rotateAngle: .3, // 封面图每帧旋转的角度
}