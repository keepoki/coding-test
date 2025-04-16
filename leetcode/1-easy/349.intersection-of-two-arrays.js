/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * 두 숫자 배열에서 공통으로 존재하는 숫자를 찾는 문제이다.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const set = new Set();
  for (const num of nums1) {
    if (nums2.includes(num)) {
      set.add(num);
    }
  }

  return [...set];
};
// @lc code=end

