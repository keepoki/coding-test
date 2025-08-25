/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 * Tags: math
 */

// @lc code=start
/**
 * ## 문제
 * 정수 x가 주어졌을 때, x가 팰린드롬(palindrome)인지 여부를 반환하세요.
 * 팰린드롬이란, 앞에서부터 읽을 때와 뒤에서부터 읽을 때가 같은 수를 의미합니다.
 *
 * ## 예시
 * 예시 1:
 * 입력: x = 121
 * 출력: true
 * 설명: 121은 앞에서부터 읽어도 121, 뒤에서부터 읽어도 121입니다.
 *
 * 예시 2:
 * 입력: x = -121
 * 출력: false
 * 설명: 앞에서부터 읽으면 -121이지만, 뒤에서부터 읽으면 121-이 됩니다. 따라서 팰린드롬이 아닙니다.
 *
 * 예시 3:
 * 입력: x = 10
 * 출력: false
 * 설명: 앞에서부터 읽으면 10이지만, 뒤에서부터 읽으면 01이 됩니다. 따라서 팰린드롬이 아닙니다.
 *
 * ## 제약 조건
 * 1. −2^31 <= x <= 2^31 - 1
 *
 * ## 추가 도전
 * 정수를 문자열로 변환하지 않고도 이 문제를 해결할 수 있을까요?
 *
 * ## 문제 요약
 * 토마토, 기러기, 스위스, 별똥별, 우영우 같이 앞에서 읽으나 뒤에서 읽으나 같은지 확인
 * 하고 결과를 반환 한다.
 *
 * ## 풀이 과정
 *
 * ### 자바스크립트에서 가장 쉬운 방법
 * 문자열로 변환 -> split으로 배열로 변환 -> revers로 뒤집기 -> 문자열 변환
 * -> 숫자로 변환 -> 값 비교
 *
 * ### 문자열로 변환 후 뒤집어서 비교하는 방법
 * 문자열로 변환 -> 문자열 뒤집기 -> 값 비교
 *
 * ### 문자열 투 포인트 탐색 방법
 * 문자열로 변환 -> 앞과 뒤에서부터 가운데 방향으로 이동하면서 하나씩 비교한다.
 *
 * ### 추가 도전 과제인 정수만으로 문제 해결을 도전
 * 1. 마이너스는 반대로 뒤집으면 무조건 달라질 수 밖에 없다.
 * 2. 10로 나눈 나머지 값들을 모은다.
 * 3. 역으로 다시 10으로 곱하여 기존의 값과 비교한다.
 *
 * ## 풀이 요약
 * 입력된 숫자를 10으로 나누고 곱하는 연산을 반복하여 숫자를 역순으로 만든 뒤,
 * 원래 숫자와 비교한다
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 11511/11511 cases passed (3 ms)
 * Your runtime beats 98.01 % of javascript submissions
 * Your memory usage beats 86.41 % of javascript submissions (63.6 MB)
 *
 * ## 점검
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;

  let reversX = 0;
  let num = x;
  while (num > 0) {
    reversX = reversX * 10 + num % 10;
    num = Math.trunc(num / 10);
  }

  return reversX === x;
};
// @lc code=end

console.log(isPalindrome(121));
console.log(isPalindrome(10));

/**
 * 자바스크립트에서 가장 쉬운 방법
 *
 * ## 풀이 과정
 * 문자열로 변환 -> split으로 배열로 변환 -> revers로 뒤집기 -> 문자열 변환
 * -> 숫자로 변환 -> 값 비교
 *
 * ## 시간 복잡도: O(n), 공간 복잡도 O(n)
 *
 * ## 제출 결과
 * 11511/11511 cases passed (13 ms)
 * Your runtime beats 17.5 % of javascript submissions
 * Your memory usage beats 20.56 % of javascript submissions (65.2 MB)
 */
const isPalindrome2 = (x) => {
  if (x < 0) return false;
  return Number(x.toString().split('').reverse().join('')) === x;
}

/**
 * 문자열로 변환 후 뒤집어서 비교하는 방법
 *
 * ## 풀이 과정
 * 문자열로 변환 -> 문자열 뒤집기 -> 값 비교
 *
 * ## 시간 복잡도: O(n), 공간 복잡도 O(n)
 *
 * ## 제출 결과
 * 11511/11511 cases passed (7 ms)
 * Your runtime beats 56.72 % of javascript submissions
 * Your memory usage beats 6.04 % of javascript submissions (65.8 MB)
 */
const isPalindrome3 = (x) => {
  if (x < 0) return false;

  const numStr = x.toString();
  let reverseX = '';
  for (let i = numStr.length - 1; i >= 0; i--) {
    reverseX += numStr[i];
  }

  return Number(reverseX) === x;
}

/**
 * 문자열 투 포인트 탐색 방법
 *
 * ## 풀이 과정
 * 문자열로 변환 -> 앞과 뒤에서부터 가운데 방향으로 이동하면서 하나씩 비교한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도 O(n)
 *
 * ## 제출 결과
 * 11511/11511 cases passed (4 ms)
 * Your runtime beats 90.16 % of javascript submissions
 * Your memory usage beats 62.47 % of javascript submissions (64.1 MB)
 */
const isPalindrome4 = (x) => {
  if (x < 0) return false;

  const numStr = x.toString();
  let left = 0;
  let right = numStr.length - 1;
  while (left < right) {
    if (numStr[left] !== numStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}