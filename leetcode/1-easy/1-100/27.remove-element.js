/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  if (nums.length === 0) return 0;

  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
// @lc code=end

// const result = removeElement([3,2,2,3], 3);
const result = removeElement([0,1,2,2,3,0,4,2], 2);
console.log(result);
