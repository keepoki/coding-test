/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 * Tags: math | string
 */

// @lc code=start
/**
 * ## 문제
 * 두 개의 이진 문자열 a와 b가 주어졌을 때, 두 문자열의 합을 이진 문자열로 반환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: a = "11", b = "1"
 * 출력: "100"
 *
 * 예시 2:
 * 입력: a = "1010", b = "1011"
 * 출력: "10101"
 *
 * ## 제약 조건
 * 1. 1 <= a.length, b.length <= 10⁴
 * 2. a와 b는 '0' 또는 '1' 문자로만 구성되어 있습니다.
 * 3. 각 문자열은 '0' 자체를 제외하고는 앞자리에 0이 오지 않습니다.
 *
 * ## 풀이 과정
 * 1. a, b 중 긴 문자열의 길이를 기준으로, 역방향으로 순회한다.
 * 2. 각 자릿수를 더하고 자리 올림을 추가하여 계속 더한다. 해당 자릿수에 문자열이 없는
 *    경우 0으로 간주한다.
 *
 * ## 풀이 요약
 * 두 이진 문자열의 길이를 맞춰서 가장 오른쪽 자리부터 합을 계산하고, 올림수를 처리하여
 * 새로운 이진 문자열을 만듭니다.
 *
 * ## 시간 복잡도: O(max(m,n)), 공간 복잡도: O(max(m,n))
 *
 * ## 제출 결과
 * 296/296 cases passed (1 ms)
 * Your runtime beats 68.4 % of javascript submissions
 * Your memory usage beats 79.24 % of javascript submissions (53.9 MB)
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  const length = Math.max(a.length, b.length);
  let result = '';
  let carry = 0;

  for (let i = 1; i <= length; i++) {
    const binaryA = parseInt(a[a.length - i]) || 0;
    const binaryB = parseInt(b[b.length - i]) || 0;
    const sum = binaryA + binaryB + carry;

    if (sum === 3) {
      result = '1' + result;
      carry = 1;
    } else if (sum === 2) {
      result = '0' + result;
      carry = 1;
    } else if (sum === 1) {
      result = '1' + result;
      carry = 0;
    } else {
      result = '0' + result;
    }
  }

  if (carry === 1) {
    result = '1' + result;
  }

  return result;
};
// @lc code=end

console.log(addBinary('11', '1')); // 100
console.log(addBinary('1010', '1011')); // 10101

/**
 * Claude Sonnet 4의 풀이 방법 1: 직접 구현
 *
 * ## 풀이 과정
 * - 뒤에서부터 한 자리씩 더하면서 carry 처리
 * - 모든 경우를 안전하게 처리하고 로직이 명확함
 *
 * ## 시간 복잡도: O(max(m,n)), 공간 복잡도: O(max(m,n))
 *
 * ## 제출 결과
 * 296/296 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 68.69 % of javascript submissions (54.1 MB)
 */
const addBinary2 = (a, b) => {
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    // 현재 자리의 숫자 합 계산
    const sum =
      (i >= 0 ? parseInt(a[i]) : 0) + (j >= 0 ? parseInt(b[j]) : 0) + carry;

    // 결과 문자열에 현재 자리의 합 추가 (0 또는 1)
    result = (sum % 2).toString() + result;

    // 다음 자리로 넘겨줄 올림수 계산
    carry = Math.floor(sum / 2);

    // 다음 자리로 이동
    i--;
    j--;
  }

  return result;
};

/**
 * Claude Sonnet 4의 풀이 방법 2: BigInt 활용 (큰 수 처리 가능)
 *
 * ## 풀이 과정
 * - JavaScript의 BigInt로 이진 문자열을 숫자로 변환 후 계산
 * - 코드가 간결하고 큰 수도 처리 가능
 *
 * ## 시간 복잡도: O(max(m,n)), 공간 복잡도: O(max(m,n))
 *
 * ## 제출 결과
 * 296/296 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 36.1 % of javascript submissions (54.7 MB)
 */
const addBinary3 = (a, b) => {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};