/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) continue;

    nums.splice(i, 1);
    zeroCount++;
    i--;
  }

  nums.push(...Array(zeroCount).fill(0));

  return nums;
};
// @lc code=end

console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([0, 1, 0, 3, 12]));

/**
 * AI GPT-3.5의 풀이
 * 배열의 요소의 크기에 영향을 주지 않고, 요소의 값만 바꿔서 최적화 하였다.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes2 = function (nums) {
  let lastNonZeroIndex = 0;

  // 비-0 요소를 배열의 앞쪽으로 이동
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }

  // 나머지 요소를 0으로 채우기
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};