/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
  const codeA = 'A'.charCodeAt(); // 65
  const length = columnTitle.length;
  let result = 0;

  for (let i = 0; i < length; i++) {
    // A는 1부터 시작이라 1을 더해준다.
    const charNum = columnTitle.charCodeAt(i) - codeA + 1;
    // 이전 값 자리올림으로 26을 곱하고, 새로운 값을 더한다 (1 ~ 25)
    result = result * 26 + charNum;
  }

  return result;
};
// @lc code=end

console.log(titleToNumber('A')); // 1
console.log(titleToNumber('AB')); // 28
console.log(titleToNumber('ZY')); // 701
// console.log(26 ** 2); // 676