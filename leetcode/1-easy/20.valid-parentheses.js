/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  let left = [];
  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      left.push(char);
    } else {
      const leftLength = left.length;
      if (!left.length ||
        (char === ')' && left[leftLength - 1] !== '(') ||
        (char === '}' && left[leftLength - 1] !== '{') ||
        (char === ']' && left[leftLength - 1] !== '[')
      ) {
        return false;
      }
      left.pop();
    }
  }
  return !left.length;
};
// @lc code=end
