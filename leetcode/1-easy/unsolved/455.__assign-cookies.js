/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * 문제 이해도 잘 안가고, 풀다가 막혀서 뤼튼 AI의 도움을 받았다.
 * 아이의 욕구와 쿠키의 크기 매칭을 위해 정렬한다.
 * 아이의 욕구가 쿠키의 크기보다 작거나 같으면 만족시키고, 다음 아이를 확인한다.
 * 쿠키의 크기가 아이의 욕구보다 작으면 다음 쿠키를 확인한다.
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
  // 아이들의 욕구와 쿠키의 크기를 정렬합니다.
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let childIndex = 0; // 아이의 인덱스
  let cookieIndex = 0; // 쿠키의 인덱스

  // 아이와 쿠키를 비교하여 최대한 많은 아이를 만족시킵니다.
  while (childIndex < g.length && cookieIndex < s.length) {
    // 현재 쿠키가 현재 아이의 욕구를 만족시키는지 확인합니다.
    if (s[cookieIndex] >= g[childIndex]) {
      // 만족시키면 아이의 인덱스를 증가시킵니다.
      childIndex++;
    }
    // 쿠키의 인덱스를 증가시킵니다.
    cookieIndex++;
  }

  // 만족한 아이의 수를 반환합니다.
  return childIndex;
};
// @lc code=end

console.log(findContentChildren([1, 2, 3], [3])); // 1
console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([10, 9, 8, 7, 10, 9, 8, 7], [10, 9, 8, 7])); // 4
