/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
  if (n < 1) return false;

  while (n >= 3) {
    n = n / 3;
  }

  // 마지막으로 나눈 값이 소수점이면 3의 거듭제곱이 아니다
  return n == 1;
};
// @lc code=end

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(45));