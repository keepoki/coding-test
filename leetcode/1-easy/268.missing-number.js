/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const length = nums.length - 1;
  for (let i = 0; i < length; ++i) {
    if (nums[i + 1] - nums[i] != 1) {
      return nums[i] + 1;
    }
  }

  if (nums[0] !== 0) {
    return 0;
  } else {
    return nums.length;
  }
};
// @lc code=end

missingNumber([0, 1]); // 2
missingNumber([1, 2]); // 0


/**
 * AI gpt-4o-mini의 풀이
 * 0부터 n까지의 합을 계산식으로 최적화하는 방식이 인상적이다.
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber2 = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // 0부터 n까지의 합
  const actualSum = nums.reduce((acc, num) => acc + num, 0); // 배열의 합
  return expectedSum - actualSum; // 누락된 숫자 반환
};