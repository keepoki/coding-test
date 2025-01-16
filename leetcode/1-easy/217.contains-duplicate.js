/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  // 처음 작성한 풀이
  // const obj = {};
  // for (const num of nums) {
  //   if (!obj[num]) {
  //     obj[num] = 1;
  //   } else {
  //     return true;
  //   }
  // }

  // set을 활용한 풀이, 위 방식 보다 빠르다.
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }

  return false;
};
// @lc code=end

