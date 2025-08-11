/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 * Tags: two-pointers | string
 */

// @lc code=start
/**
 * ## 문제
 * 두 문자열 needle과 haystack이 주어졌을 때, haystack에서 needle이 처음 나타나는
 * 인덱스를 반환하세요. 만약 needle이 haystack의 일부가 아니라면 -1을 반환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: haystack = "sadbutsad", needle = "sad"
 * 출력: 0
 * 설명: "sad"는 인덱스 0과 6에서 나타납니다.
 * 첫 번째 발생은 인덱스 0이므로, 0을 반환합니다.
 *
 * 예시 2:
 * 입력: haystack = "leetcode", needle = "leeto"
 * 출력: -1
 * 설명: "leeto"는 "leetcode"에서 발생하지 않으므로, -1을 반환합니다.
 *
 * ## 제약 조건
 * 1. 1 <= haystack.length, needle.length <= 104
 * 2. haystack과 needle은 오직 소문자 영어 문자로만 구성됩니다.
 *
 * ## 문제 요약
 * needle의 값과 똑같은 문자열이 haystack에 포함되는지 찾아서 첫 번째 인덱스를 받환한다.
 * 없으면 -1을 반환한다.
 *
 * ## 풀이 과정
 * 자바스크립트에서는 String.prototype.indexOf() 메서드가 해당 기능을 지원해서
 * 쉽게 풀 수 있다. 해당 기능을 사용하지 않고 풀어보는 과정을 적어보도록 한다.
 *
 * 태그 투 포인터에서 힌트를 얻을 수 있었다. haystack의 요소를 순회하면서 needle의
 * 첫 번째 요소와 같은 문자를 찾는다. pointer를 1로 초기화하고 while 문을 사용하여
 * haystack과 needle의 요소들을 차례대로 비교해, 같지 않다면 while 문을 빠져나오고
 * 같다면 pointer를 1씩 증가시키면서 비교한다.
 * while 문에 빠져나오거나 끝난 경우 pointer와 needle의 길이와 비교하여 같으면
 * 현재 인덱스를 반환한다. 순회가 끝날 때까지 반환 하지 않았으면 -1를 반환한다.
 *
 * 문제를 다 풀고 claude에게 풀이 과정을 맡겼으나, 풀이 방법을 써놓은 것 일뿐이다.
 * 내가 어떻게 생각하면서 풀었는지를 나타내는 것이 아니다.
 *
 * 1. 기본 검증: haystack의 길이가 needle보다 짧으면 바로 -1 반환
 * 2. 외부 루프: haystack의 각 문자를 순회하면서 needle의 첫 번째 문자와 일치하는지 확인
 * 3. 매칭 시작: 첫 번째 문자가 일치하면 pointer를 1로 설정하고 내부 while 루프 시작
 * 4. 연속 매칭 확인:
 *      - haystack[i + pointer]와 needle[pointer]가 일치하면 pointer 증가
 *      - 일치하지 않으면 pointer를 1로 리셋하고 while 루프 탈출
 *
 * 5. 완전 매칭 확인: pointer가 needle.length와 같아지면 완전히 매칭된 것이므로
*     시작 인덱스 i 반환
 * 6. 다음 위치 준비: 매칭이 실패하면 pointer를 1로 리셋하고 다음 위치에서 재시도
 * 7. 결과 반환: 모든 순회가 끝나도 매칭되지 않으면 -1 반환
 *
 * ## 풀이 요약
 * haystack을 순회하면서 needle의 첫 글자와 일치하는 위치에서 연속된 문자들이 needle과
 * 완전히 매칭되는지 확인하는 브루트 포스 알고리즘을 이용한다.
 *
 * ## 시간 복잡도: O(n x m), 공간 복잡도: O(1)
 * n = haystack의 길이 m = needle의 길이
 *
 * ## 제출 결과
 * 83/83 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 41.87 % of javascript submissions (54 MB)
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  // 가장 쉽게 푸는 방법
  // return haystack.indexOf(needle);

  // 투 포인터 방식으로 푸는 방법
  if (haystack.length < needle.length) return -1;

  let pointer = 1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      pointer = 1;

      while (pointer < needle.length) {
        if (haystack[i + pointer] === needle[pointer]) {
          pointer++;
        } else {
          break;
        }
      }

      if (pointer === needle.length) {
        return i;
      }
    }
  }

  return -1;
};
// @lc code=end

console.log(strStr("sadbutsad", "sad"))
console.log(strStr("hello", "ll"))