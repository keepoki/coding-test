/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  while (num > 9) {
    // JS에서 할 수 있는 가장 쉬운 방법
    // num = num.toString().split('').reduce((acc, cur) => acc + Number(cur), 0)

    // 일부러 배열을 만들어서 풀어봄
    num = numberToArray(num).reduce((acc, cur) => acc + cur, 0);
  }
  return num;
};

/**
 * @param {number} num
 * @returns {number[]}
 */
function numberToArray(num) {
  if (num < 0) return [];

  let array = [];
  while (num > 0) {
    array.push(num % 10);
    num = Math.floor(num / 10);
  }

  return array;
}
