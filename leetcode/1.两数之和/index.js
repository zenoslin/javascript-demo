/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 解题思路：
 * 暴力解决，两个for循环，item相加且下标不同的为结果
 * 执行用时 204 ms 内存消耗 34.7 MB
 */
var twoSum1 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) return [i, j];
    }
  }
};

/**
 * 解题思路：
 * 用一个列表temp存放遍历过的item与其下标，算出目标值target与当前遍历item的相差值dif
 * 当相差值dif存在于列表temp中时，两数的下标为结果
 * 执行用时 68 ms 内存消耗 34.2 MB
 */
var twoSum2 = function(nums, target) {
  let temp = {};
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i];
    if (dif in temp) return [temp[dif], i];
    temp[nums[i]] = i;
  }
};

// 执行用时 72 ms 内存消耗 35.6 MB
var twoSum3 = function(nums, target, i = 0, maps = {}) {
  const map = maps;
  if (map[target - nums[i]] >= 0) {
    return [map[target - nums[i]], i];
  } else {
    map[nums[i]] = i;
    i++;
    if (i < nums.length) {
      return twoSum3(nums, target, i, map);
    } else {
      return;
    }
  }
};
