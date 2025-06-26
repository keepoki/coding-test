/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * 공통적으로 가지고 있는 숫자를 표시된 횟수만큼 배열에 추가하여 반환하는 문제이다.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const countMap = {};
  const result = [];

  // nums1의 각 요소의 개수를 세어 countMap에 저장
  for (const num of nums1) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // nums2의 각 요소를 확인하고, countMap에 있는 경우 결과 배열에 추가
  for (const num of nums2) {
    if (countMap[num] > 0) {
      result.push(num);
      countMap[num] -= 1; // 이미 추가했으므로 개수를 줄임
    }
  }

  return result;
};
// @lc code=end

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([1, 2], [1, 1]));

