/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * 정수 numRows가 주어지면, 파스칼의 삼각형에서 처음 numRows만큼의 행을 반환하세요.
 * 파스칼의 삼각형에서는 보시는 바와 같이 각 숫자가 바로 위 두 숫자의 합입니다.
 *      [1]
 *     [1][1]
 *   [1][2][1]
 *  [1][3][3][1]
 * [1][4][6][4][1]
 *
 * ## 예시
 * 예시 1:
 * 입력: numRows = 5
 * 출력: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * 예시 2:
 * 입력: numRows = 1
 * 출력: [[1]]
 *
 * ## 제약 조건
 * 1 <= numRows <= 30
 *
 * ## 문제 요약
 * 파스칼 삼각형에서 numRows만큼의 행을 반환해야 한다. 각 숫자가 바로 위 두 숫자의 합이다.
 *
 * ## 풀이 과정
 * 1. 결과 배열에 첫 번째 행을 포함하여 초기화한다.
 * 2. 두번째 요소부터 시작하여 numRows만큼 반복하여 새로운 행을 생성한다.
 * 3. 새로운 행은 항상 [1]으로 초기화한다.
 * 4. 중간값을 채우기 위해 두 번째 요소부터 만들어야 할 행의 길이만큼 반복하면서
 *    이전 행의 왼쪽 숫자와 오른쪽 숫자를 더하여 이번 행에 추가한다.
 * 5. 마지막 숫자는 이전 배열의 범위를 넘어가므로 왼쪽 숫자와 0을 더한다.
 * 6. 결과 배열을 반환한다.
 *
 * ## 풀이 요약
 * 파스칼의 삼각형을 동적 계획법 방식으로 생성하며, 각 행은 이전 행의 인접한 두 숫자의
 * 합으로 채워지고, 총 numRows개의 행을 계산하여 반환한다.
 *
 * ## 시간 복잡도: O(numRows²), 공간 복잡도: O(numRows²)
 *
 * ## 제출 결과
 * 30/30 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 67.49 % of javascript submissions (54.1 MB)
 *
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const newRow = [1];
    const prevRow = triangle[i - 1];

    for (let j = 1; j < i + 1; j++) {
      newRow.push(prevRow[j - 1] + (prevRow[j] || 0));
    }

    triangle.push(newRow);
  }

  return triangle;
};
// @lc code=end

console.log(generate(5));

/**
 * Gemini 2.5 Flash의 풀이
 *
 * 비슷하지만 새로운 행의 중간값을 넣는 부분이 차이가 있다.
 * 이전 배열의 길이만큼 반복하므로 예외 처리가 필요 없어진다.
 * 그리고 항상 행의 마지막 값은 1이므로 1을 추가하고 있다.
 *
 * ## 시간 복잡도: O(numRows²), 공간 복잡도: O(numRows²)
 *
 * ## 제출 결과
 * 30/30 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 82.15 % of javascript submissions (53.9 MB)
 */
const generate2 = (numRows) => {
  // 결과를 저장할 배열. 첫 번째 행 [1]로 초기화합니다.
  const triangle = [[1]];

  // numRows가 1이면 첫 번째 행만 반환합니다.
  if (numRows === 1) {
    return triangle;
  }

  // 두 번째 행부터 numRows까지 반복하여 행을 생성합니다.
  for (let i = 1; i < numRows; i++) {
    // 현재 행을 저장할 새 배열. 파스칼의 삼각형의 각 행은 항상 1로 시작합니다.
    const currentRow = [1];
    // 이전 행을 참조합니다.
    const prevRow = triangle[i - 1];

    // 이전 행의 인접한 두 숫자를 더하여 현재 행의 중간 값을 채웁니다.
    // 예를 들어, 이전 행이 [1, 2, 1]이면,
    // prevRow[0] + prevRow[1] = 1 + 2 = 3
    // prevRow[1] + prevRow[2] = 2 + 1 = 3
    // 이 계산은 prevRow의 두 번째 요소부터 시작하여 마지막에서 두 번째 요소까지 진행됩니다.
    for (let j = 1; j < prevRow.length; j++) {
      currentRow.push(prevRow[j - 1] + prevRow[j]);
    }

    // 파스칼의 삼각형의 각 행은 항상 1로 끝납니다.
    currentRow.push(1);

    // 완성된 현재 행을 결과 배열에 추가합니다.
    triangle.push(currentRow);
  }

  // 최종 파스칼의 삼각형을 반환합니다.
  return triangle;
};
