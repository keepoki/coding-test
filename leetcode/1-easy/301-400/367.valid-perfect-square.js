/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  // 간단하게 푼 풀이, 성능이 매우 안좋다.
  if (num == 1) return true;

  const half = Math.floor(num / 2);

  for (let i = 1; i <= half; i++) {
    if (i * i === num) return true;
  }

  return false;
};
// @lc code=end


/**
 * 뤼튼 AI가 푼 풀이, 성능이 매우 뛰어나다.
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare2 = (num) => {
  if (num < 1) return false;

  let left = 1;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === num) {
      return true; // 제곱수인 경우
    } else if (square < num) {
      left = mid + 1; // mid의 제곱이 num보다 작으면 오른쪽으로 이동
    } else {
      right = mid - 1; // mid의 제곱이 num보다 크면 왼쪽으로 이동
    }
  }
  return false;
}