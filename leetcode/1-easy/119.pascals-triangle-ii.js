/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * 정수 rowIndex가 주어졌을 때, 파스칼 삼각형의 rowIndex번째 (0-indexed) 행을 반환하세요.
 * 파스칼 삼각형에서 각 숫자는 바로 위에 있는 두 숫자의 합으로 구성됩니다.
 *
 *      [1]
 *     [1][1]
 *   [1][2][1]
 *  [1][3][3][1] ----- rowIndex 3
 * [1][4][6][4][1] --- rowIndex 4
 *
 * ## 예시
 * 예시 1:
 * 입력: rowIndex = 3
 * 출력: [1,3,3,1]
 *
 * 예시 2:
 * 입력: rowIndex = 0
 * 출력: [1]
 *
 * 예시 3:
 * 입력: rowIndex = 1
 * 출력: [1,1]
 *
 * ## 제약 조건
 * 1. 0 <= rowIndex <= 33
 *
 * ## 후속 조치
 * 알고리즘을 최적화하여 O(rowIndex)의 추가 공간만 사용하도록 할 수 있을까요?
 *
 * ## 문제 요약
 * 파스칼 삼각형에서 rowIndex에 해당하는 행을 반환해야 한다. 각 숫자는 바로 위 두 숫자의 합이다.
 *
 * ## 풀이 과정
 * 모든 배열을 추가할 필요가 없으므로 이전 배열 데이터를 갱신하는 방식으로 메모리를 절약하여
 * 알고리즘 최적화하여 O(rowIndex)의 추가 공간만 사용한다.
 * 1. 최초, 이전 행을 초기화한다.
 * 2. 두 번째 요소부터 시작해서 rowIndex만큼 반복하여 새로운 행을 정의한다.
 * 3. 새로운 행은 항상 [1]로 초기화한다.
 * 4. 중간 값을 채우기 위해 두 번째 요소부터 시작해 이전 행의 길이만큼 반복하여
 *    이전 행의 왼쪽 값과 오른쪽 값을 더한 값을 새로운 행에 추가한다.
 * 5. 새로운 행에 항상 1을 추가한다.
 * 6. 이전 행에 새로운 행의 데이터를 덮어씌운다.
 * 7. 결과로 마지막 행인 배열을 반환한다.
 *
 * ## 풀이 요약
 * 동적 계획법으로 이전 행의 값을 사용하여 현재 행의 값을 계산하는 방식으로 rowIndex만큼
 * 반복하고 마지막 배열을 반환한다.
 *
 * ## 시간 복잡도: O(rowIndex²), 공간 복잡도: O(rowIndex)
 *
 * ## 제출 결과
 * 34/34 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 79.17 % of javascript submissions (53.3 MB)
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  let prevRow = [1]
  
  if (rowIndex == 0) {
    return prevRow;
  }
  
  const length = rowIndex + 1;
  
  for (let i = 1; i < length; i++) {
    const currentRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      currentRow.push(prevRow[j - 1] + prevRow[j]);
    }

    currentRow.push(1);
    prevRow = currentRow;
  }

  return prevRow;
};
// @lc code=end

console.log(getRow(3)); // [1,3,3,1]