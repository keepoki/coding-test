/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => {
  const trimString = s.trim();
  if (trimString == '') return 0;

  let isNonSpace = false;
  let count = 1;
  for (let i = 0; i < trimString.length; i++) {
    const char = trimString[i];
    if (char == ' ' && isNonSpace == true) {
      count++;
      isNonSpace = false;
    } else if (char != ' ') {
      isNonSpace = true;
    }
  }

  return count;
};
// @lc code=end

console.log(countSegments("Hello, my name is John")); // 5
console.log(countSegments(", , , ,        a, eaefa")); // 6

/**
 * Codeium AI의 풀이
 * 정규표현식에서 \s는 스페이스, 탭, 개행을 의미하고
 * +는 앞에 지정한 \s가 1개 이상 일치하는 것을 의미한다.
 * 즉 스페이스바가 1개이거나 더 많거나 상관 없이 찾아낸다.
 * @param {string} s
 * @return {number}
 */
const countSegments2 = (s) => {
  if (s.trim() == '') return 0;
  return s.trim().split(/\s+/).length;
};