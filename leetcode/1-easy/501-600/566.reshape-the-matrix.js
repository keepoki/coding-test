/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * 행열 데이터를 유지하면서 m x n 행렬을 다른 크기 r x c의 새로운 행렬로
 * 재구성 해야 한다.
 * 재구성된 행렬은 원래 행렬의 모든 요소를 동일한 행 이동 순서로 채워야 한다.
 * 재구성이 가능한지는 m x n과 r x c가 같은지로 확인할 수 있다.
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (mat, r, c) => {
  const m = mat.length;
  const n = mat[0].length;

  // 행렬 재구성이 가능하지 않은 경우 원래 행렬을 리턴
  if (r * c != m * n) {
    return mat;
  }

  // 1차 행렬로 변환
  const flatArr = mat.flat();
  const result = [];

  // row 만큼 순환하여 c개씩 분할하여 묶는다.
  for (let i = 0; i < r; i++) {
    result.push(flatArr.slice(i * c, (i + 1) * c));
  }

  return result;
};
// @lc code=end

console.log(matrixReshape([[1,2], [3,4]], 1, 4));
console.log(matrixReshape([[1,2], [3,4]], 2, 4));