/*
 * @lc app=leetcode id=521 lang=javascript
 *
 * [521] Longest Uncommon Subsequence I
 */

// @lc code=start
/**
 * a와 b사이의 가장 긴 비일상적인 부분 수열의 길이를 반환해야한다는데
 * 뭔지 잘 모르겠다. 그래서 일단 테스트 케이스 통과를 확인하면서 풀었다.
 * 두 문자열이 다른 경우 그냥 -1를 리턴하고 b.length를 리턴해보았고
 * 실패 케이스를 보니 긴 문자열의 길이를 리턴하는 것을 보고
 * a와 b의 길이 중에 큰 것을 리턴하는 것으로 바꿨는데 통과되었다...
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = (a, b) =>  a === b ? -1 : Math.max(a.length, b.length);
// @lc code=end

