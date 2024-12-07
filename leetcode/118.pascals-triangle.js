/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  // numRows가 1인 경우 리턴
  if (numRows == 1) return [[1]];

  // 가운데 데이터를 더할 최소 조건의 배열로 초기화한다.
  const result = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    // 새로운 배열을 1로 채운다.
    const row = new Array(i + 1).fill(1);

    // 마지막 배열 데이터를 가져온다.
    const lastRow = result[result.length - 1];

    // 가운데 데이터만 더해줄 수 있도록 조건을 설정한다.
    for (let j = 0; j + 1 < i; j++) {
      // 마지막 데이터를 기준으로 데이터를 더해서 덮어 씌운다.
      row[j + 1] = lastRow[j] + lastRow[j + 1];
    }

    result.push(row);
  }

  return result;
};
// @lc code=end

console.log(generate(5));