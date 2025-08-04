/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 * Tags: string
 */

// @lc code=start
/**
 * ## 문제
 * 문자열 배열에서 가장 긴 공통 접두사(longest common prefix) 문자열을 찾는 함수를
 * 작성하세요. 공통 접두사가 없으면 빈 문자열 ""을 반환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: strs = ["flower","flow","flight"]
 * 출력: "fl"
 *
 * 예시 2:
 * 입력: strs = ["dog","racecar","car"]
 * 출력: ""
 * 설명: 입력된 문자열들 사이에 공통 접두사가 없습니다.
 *
 * ## 제약 조건
 * 1. 1 <= strs.length <= 200
 * 2. 0 <= strs[i].length <= 200
 * 3. strs[i]는 비어 있지 않은 경우에만 소문자 영어 알파벳으로 구성됩니다.
 *
 * ## 문제 요약
 * 문자열 배열에서 가장 긴 공통 접두사 문자열을 찾아서 반환한다.
 *
 * ## 풀이 과정
 * 접두사란 단어 앞에 붙는 것을 말한다. 그렇다면 모든 문자열을 확인하면서 접두사를 찾아야
 * 하는데, 처음 접두사 값을 어떻게 설정하고 어떤 방식으로 비교할 것인지가 중요하다.
 * 1. 첫 번째 문자열을 초기 접두사로 설정한다.
 * 2. 나머지 문자열을 순회하며 현재 접두사가 해당 문자열의 시작 부분에 있는지 확인한다.
 * 3. 만약 시작 부분에 없다면, 접두사의 마지막 문자를 하나씩 제거하면서 다시 확인한다.
 * 4. 남은 접두사를 반환한다.
 *
 * ## 풀이 요약
 * 첫 번째 문자열을 기준으로 삼아 다른 문자열들과 비교하며 공통 접두사를 찾고, 일치하지
 * 않으면 접두사의 끝을 하나씩 잘라내면서 가장 긴 공통 접두사를 찾아 반환한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 126/126 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 35.42 % of javascript submissions (55.5 MB)
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = strs[0].slice(0, prefix.length - 1)
    }
  }
  
  return prefix;
};
// @lc code=end

