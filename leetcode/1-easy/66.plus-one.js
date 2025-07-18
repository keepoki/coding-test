/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * 주어진 문제는 정수 배열 digits로 표현된 큰 정수를 1 증가시키고, 그 결과를 다시 배열
 * 형태로 반환하는 것입니다. 배열의 각 digits[i]는 정수의 i번째 자릿수를 나타내며,
 * 가장 왼쪽(가장 중요한 자릿수)부터 가장 오른쪽(가장 덜 중요한 자릿수) 순서로 정렬됩니다.
 * 이 큰 정수에는 선행 0이 없습니다.
 *
 * ## 예시
 * 예시 1:
 * 입력: digits = [1,2,3]
 * 출력: [1,2,4]
 * 설명: 이 배열은 정수 123을 나타냅니다. 1을 더하면 123 + 1 = 124가 됩니다.
 * 따라서 결과는 [1,2,4]여야 합니다.
 *
 * 예시 2:
 * 입력: digits = [4,3,2,1]
 * 출력: [4,3,2,2]
 * 설명: 이 배열은 정수 4321을 나타냅니다. 1을 더하면 4321 + 1 = 4322가 됩니다.
 * 따라서 결과는 [4,3,2,2]여야 합니다.
 *
 * 예시 3:
 * Input: digits = [9]
 * 출력: [1,0]
 * 설명: 이 배열은 정수 9를 나타냅니다. 1을 더하면 9 + 1 = 10이 됩니다.
 * 따라서 결과는 [1,0]여야 합니다.
 *
 * ## 제약 조건
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 * digits에는 선행 0이 포함되지 않습니다.
 *
 * ## 문제 요약
 * 배열을 하나의 정수로 생각하고 1을 증가시키고 배열로 반환해야하는 문제이다.
 *
 * ## 풀이 과정
 * 1. 마지막 인덱스 요소에 1을 더한다.
 * 2. 해당 자릿수가 10이 되었으면 값을 0으로 만들고, 왼쪽 요소로 이동한다.
 * 3. 자릿수가 10이 아닐때 까지 왼쪽 요소로 이동하고 맨 왼쪽 인덱스까지 이동한다면,
 *    해당 자릿수를 0으로 만들고 배열의 가장 앞에 숫자 1을 추가한다.
 *
 * ## 풀이 요약
 * 배열의 가장 오른쪽 자릿수부터 1을 더해가며, 10이 되는 경우 해당 자릿수를 0으로 만들고
 * 왼쪽 자릿수로 올림한다. 모든 자릿수가 9였던 경우에는 가장 앞에 1을 추가한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 111/111 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 95.27 % of javascript submissions (52.5 MB)
 *
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let index = digits.length - 1;
  while (index > -1) {
    digits[index]++;

    if (digits[index] > 9) {
      digits[index] = 0;
      index--;
    } else {
      break;
    }
  }

  if (index == -1) {
    return [1, ...digits];
  }

  return digits;
};
// @lc code=end

console.log(plusOne([9])); // [1, 0]
console.log(plusOne([1, 2, 3])); // [1, 2, 4]

/**
 * Gemini 2.5 Flash의 풀이, 크게 다를 바 없지만, 조건에 대한 처리가 더 깔끔하다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 111/111 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 62.11 % of javascript submissions (53.4 MB)
 */
const plusOne2 = (digits) => {
  // 배열의 마지막 인덱스부터 시작합니다.
  let n = digits.length;

  // 뒤에서부터 각 자릿수를 확인합니다.
  for (let i = n - 1; i >= 0; i--) {
    // 현재 자릿수가 9가 아니면 1을 더하고 바로 반환합니다.
    // 올림이 발생하지 않으므로 더 이상 처리할 필요가 없습니다.
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    // 현재 자릿수가 9이면 0으로 만들고 다음 왼쪽 자릿수로 올림을 전파합니다.
    else {
      digits[i] = 0;
    }
  }

  // 여기까지 도달했다는 것은 모든 자릿수가 9였다는 의미입니다 (예: [9,9,9]).
  // 이 경우, 배열의 맨 앞에 1을 추가하고 나머지 자릿수는 모두 0이 됩니다.
  // 예를 들어, [9,9,9]는 [1,0,0,0]이 됩니다.
  return [1, ...digits];
};
