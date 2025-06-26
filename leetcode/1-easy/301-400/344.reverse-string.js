/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * 메모리 제약이 있는 문제이다. 새로운 배열 없이, s만 가지고 처리해야한다.
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  // JS에서 문자열을 뒤집기 가장 좋은 방법
  // return s.reverse();

  const half = Math.floor(s.length / 2);
  for (let i = 0; i < half; i++) {
    const temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
};
// @lc code=end
console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o", "l", "l", "e", "h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]
