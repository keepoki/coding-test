/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  if(nums.length === 1) return nums[0];

  // nums의 길이 절반 이상 보다 많은 숫자를 찾아야 한다.
  const half = Math.floor(nums.length / 2);

  // object에 해당 숫자(키)에 카운트하는 것이 효율적인 방법이라 생각하였다.
  const numObj = {};

  for (const num of nums) {
    if (numObj[num]) {
      numObj[num]++;
      if (numObj[num] > half) {
        return num;
      }
    } else {
      numObj[num] = 1;
    }
  }
};
// @lc code=end

