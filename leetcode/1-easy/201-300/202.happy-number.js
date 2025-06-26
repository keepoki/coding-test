/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * 숫자를 각 자리의 제곱의 합으로 교체하여 숫자가 1이 될 때 까지 반복한다.
 * 같은 수가 나온다면 반복된다는 의미이다.
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const set = new Set();

  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }

    set.add(n);
    n = sumOfSquareDigits(n);
  }

  return true;
};

function sumOfSquareDigits(num) {
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
}
// @lc code=end

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
