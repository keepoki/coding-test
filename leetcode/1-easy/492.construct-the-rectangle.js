/*
 * @lc app=leetcode id=492 lang=javascript
 *
 * [492] Construct the Rectangle
 */

// @lc code=start
/**
 * 면적이 입력값으로 주어지고
 * L은 너비 W는 넓이, L >= W, L과 W의 차이는 가능한 작아야 하고
 * [L, W]를 반환해야 한다.
 * 1. 면적을 임의 숫자로 나누어 떨어지는 값을 구해야한다.
 * 2. 그리고 그 값으로 나눈 몫으로 곱하면 L과 W를 구할 수 있다. (L x W = area)
 * 3. 차이가 작아야 하므로, 제곱근을 기준으로 앞으로든 뒤로든 순회하면 된다.
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = (area) => {
  const sqrt = Math.floor(Math.sqrt(area));
  for (let w = sqrt; w > 0; --w) {
    if (area % w === 0) {
      const l = area / w;
      return [l, w];
    }
  }
};
// @lc code=end

console.log(constructRectangle(2)); // [2, 1]
console.log(constructRectangle(4)); // [2, 2]
console.log(constructRectangle(37)); // [37, 1]
console.log(constructRectangle(122122)); // [427, 286]