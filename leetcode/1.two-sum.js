/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const numMap = new Map();
  let num, diff, cache;
  for (let i = 0; i < nums.length; ++i) {
    num = nums[i];
    diff = target - num;
    cache = numMap.get(diff);
    if (cache !== undefined) return [cache, i];
    numMap.set(num, i);
  }

  return [0, 0];
};
// @lc code=end

// ** first **
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; ++i) {
//     for (let j = i + 1; j < nums.length; ++j) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

