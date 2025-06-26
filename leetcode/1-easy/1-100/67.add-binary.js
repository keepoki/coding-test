/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let aIdx = a.length - 1, bIdx = b.length - 1;
  let result = '', current = '', increasing = 0, sum = 0;

  for (; aIdx >= 0 || bIdx >= 0; aIdx--, bIdx--) {
    sum = Number(a[aIdx] || 0) + Number(b[bIdx] || 0) + increasing;

    if (sum === 3) {
      current = '1';
      increasing = 1;
    } else if (sum === 2) {
      current = '0';
      increasing = 1;
    } else if (sum === 1) {
      current = '1';
      increasing = 0;
    } else {
      current = '0';
    }

    result = current + result;
  }

  if (increasing == 1) {
    result = '1' + result;
  }

  return result;
};
// @lc code=end

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
console.log(addBinary('100', '110010'));
console.log(addBinary('110010', '10111'));
console.log(addBinary('101111', '10'));

/*
  처음에는 모든 경우의 수에 대하여 생각하고 조건문으로 분기 처리하는 방식으로
  작성하다가 경우의 수도 너무 많고 조건이 지저분해지길래 다른 방법을 생각해 보았다.
  조건이 아닌 상태를 나타내는 경우의 수를 생각했더니 0, 1, 2, 3인 것이다.
  a의 값과 b의 값 그리고 올림 수 값을 더하게 되면 0 ~ 3 까지의 상태 값을 나타낼 수 있다.
*/