/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * MATLAB에는 reshape이라는 유용한 함수가 있습니다. 이 함수는 m x n 행렬을 같은 데이터
 * 순서를 유지하면서 새로운 크기의 r x c 행렬로 변환할 수 있습니다.
 * m x n 행렬 mat과 두 정수 r과 c가 주어집니다. 여기서 r은 원하는 행의 개수,
 * c는 원하는 열의 개수를 의미합니다.
 * 새로운 행렬은 원래 행렬의 원소들을 행 순서(row-traversing order) 그대로 채워 넣어야
 * 합니다.
 * 이를 만약 주어진 r과 c로 행렬을 재구성하는 것이 가능하고 합법적이라면, 새로 변형된
 * 행렬을 출력하세요. 그렇지 않다면, 원래 행렬을 그대로 출력하세요.
 *
 * ## 예시
 * 예제 1
 * 입력: mat = [[1,2],[3,4]], r = 1, c = 4
 * 출력: [[1,2,3,4]]
 *
 * 예제 2
 * 입력: mat = [[1,2],[3,4]], r = 2, c = 4
 * 출력: [[1,2],[3,4]]
 *
 * ## 제약 조건
 * 1. m == mat.length
 * 2. n == mat[i].length
 * 3. 1 <= m, n <= 100
 * 4. -1000 <= mat[i][j] <= 1000
 * 5. 1 <= r, c <= 300
 *
 * ## 문제 요약
 * 행렬을 주어진 크기로 재구성하되, 전체 원소 개수가 맞지 않으면 원본 그대로 반환한다.
 *
 * ## 풀이 과정
 * 2차 배열이 주어지고, 1차 배열 또는 2차 배열로 반환해야 하는데,
 * 우선 행렬로 변환이 가능한지는 n x m = r * c가 성립되어야 한다.
 * 1. 2차 배열을 1차 배열로 변환하기
 * 2. 새로운 배열에 r만큼 반복하며 c개수 추가한다.
 *
 * ## 풀이 요약
 * 행렬 변환 가능하면 1차 행렬로 변환 후 r만큼 반복하며 c 개수를 가진 배열을 만든 후 반환
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 57/57 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 41 % of javascript submissions (59.4 MB)
 *
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (mat, r, c) => {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) return mat;

  const flat = mat.flat();
  const result = [];
  for (let i = 0; i < r; i++) {
    result.push(flat.slice(i * c, (i + 1) * c));
  }

  return result;
};
// @lc code=end

/**
 * GPT-5의 풀이, 공간 복잡도 O(1)에 부합하는 방식
 *
 * 처리 속도는 느리다.
 *
 * ## 풀이 과정
 * 1. 원소 개수 확인
 * - 원래 행렬의 원소 개수 = m * n
 * - 새 행렬의 원소 개수 = r * c
 * - 두 값이 다르면 → reshape 불가능 → 원본 반환
 *
 * 2. 인덱스 매핑
 * - 원소를 일렬로 본다고 가정했을 때, i번째 원소의 원래 위치는:
 *    원래 행: Math.floor(i / n)
 *    원래 열: i % n
 *
 * - 변형 후 위치는:
 *    새 행: Math.floor(i / c)
 *    새 열: i % c
 *
 * 3. 새 행렬에 배치
 *    - 모든 원소를 위 규칙에 따라 새 좌표로 옮기면 reshape 완료.
 *
 * ## 풀이 요약
 * 원소 개수가 같을 때, i번째 원소를 (i/c, i%c) 위치로 매핑하면 된다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 57/57 cases passed (2 ms)
 * Your runtime beats 64.85 % of javascript submissions
 * Your memory usage beats 25.1 % of javascript submissions (59.7 MB)
 *
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape2 = (mat, r, c) => {
  const m = mat.length;
  const n = mat[0].length;

  // 전체 원소 개수가 맞지 않으면 원본 반환
  if (m * n !== r * c) return mat;

  const result = Array.from({ length: r }, () => Array(c));

  for (let i = 0; i < m * n; i++) {
    // 원래 좌표
    const row = Math.floor(i / n);
    const col = i % n;

    // 새로운 좌표
    const newRow = Math.floor(i / c);
    const newCol = i % c;

    result[newRow][newCol] = mat[row][col];
  }

  return result;
};