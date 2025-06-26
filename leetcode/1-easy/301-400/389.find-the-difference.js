/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * s 문자열과 t 문자열의 차이를 찾는 문제이다. 다른 1개의 문자를 찾아야 한다.
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  const sCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    sCount[char] = (sCount[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!sCount[char]) return char;
    sCount[char]--;
  }
};
// @lc code=end

