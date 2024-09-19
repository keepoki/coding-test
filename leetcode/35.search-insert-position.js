/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (target == num) {
      return i;
    } else if (target < num) {
      return i;
    }
  }

  return nums.length;
};
// @lc code=end

console.log( searchInsert([1,3,5,6], 5) );
console.log( searchInsert([1,3,5,6], 2) );
console.log( searchInsert([1,3,5,6], 7) );