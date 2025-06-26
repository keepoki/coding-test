/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 같은 값을 가진 요소의 인덱스 i와 j의 차이 값과 k와 비교하여 작거나 같은 것을
 * 찾는 문제이다. nums = [1,2,3,1], k = 3일 때, 숫자 1에 해당하는
 * index 0과 3이 서로 얼마나 떨어져 있는지를 구하는 것이다. 3 - 0 <= 3
 * nums = [1,0,1,1], k = 1의 경우 인접한 1과 1의 사이가 1인 경우가 존재한다.
 */
const containsNearbyDuplicate = function(nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const prevIndex = map.get(nums[i]);
      if (i - prevIndex <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }

  return false;
};
// @lc code=end

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false

