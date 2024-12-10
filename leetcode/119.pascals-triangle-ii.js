/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  // 배열의 공간을 확보, 모든 데이터를 0으로 초기화
  const result = new Array(rowIndex + 1).fill(0);

  // 첫 번째 요소를 1로 설정한다.
  result[0] = 1;

  // 첫 번째 요소를 제외한 나머지 요소를 순차 접근
  for (let i = 1; i <= rowIndex; i++) {

    // i 번째 요소부터 두 번째 요소까지 더해준다.
    for (let j = i; j >= 1; j--) {
      result[j] += result[j - 1];
    }
  }

  return result;
};
// @lc code=end

console.log(getRow(3)); // [ 1, 3, 3, 1 ]
console.log(getRow(4)); // [ 1, 4, 6, 4, 1 ]

/*
  getRow(3)을 예시로 위 소스 코드의 순서대로 계산 결과를 분석하였다.
  1. [1, 0, 0, 0]
  2. [1, 1, 0 ,0]
  3. [1, 2, 1, 0]
  4. [1, 3, 3, 1]
*/