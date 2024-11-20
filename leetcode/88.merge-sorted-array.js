/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  // 우선 데이터를 채운 후 정렬하는 것이 나을 것이라고 판단하였음
  const length = m + n;
  let nIdx = 0;
  // nums1의 m번째부터 nums2의 데이터를 순차적으로 넣어준다.
  for (let i = m; i < length; i++) {
    nums1[i] = nums2[nIdx++];
  }

  // 정렬한 결과를 리턴
  return nums1.sort((a, b) => a - b);
};
// @lc code=end

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([0], 0, [1], 1));
console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3));