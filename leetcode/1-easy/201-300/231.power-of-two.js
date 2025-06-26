/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  while (n > 1) {
    n = n / 2;
  }
  return n === 1;
};
// @lc code=end

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(6)); // false
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(16)); // true
