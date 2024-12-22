/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  const codeA = 'A'.charCodeAt(); // 65
  let result = '';

  while (columnNumber > 0) {
    // 1을 제외한 26으로 나눈 나머지를 구한다. 0 ~ 25 (A ~ Z)
    columnNumber--;
    const num = columnNumber % 26;
    // 새로운 문자를 앞에 이어 붙힌다.
    result = String.fromCharCode(codeA + num) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};
// @lc code=end

console.log(convertToTitle(28)); // AB
console.log(convertToTitle(701)); // ZY