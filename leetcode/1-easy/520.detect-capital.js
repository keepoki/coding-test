/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * 1. 모든 글자가 대문자이거나
 * 2. 모든 글자가 소문자이거나
 * 3. 첫 글자만 대문자인 경우 참이다.
 * 조건에 부합하지 않으면 거짓이다.
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  if (word === word.toUpperCase()) {
    return true;
  } else if (word === word.toLowerCase()) {
    return true;
  } else if (word[0] !== word[0].toUpperCase()) {
    return false;
  }

  for (let i = 1; i < word.length; ++i) {
    if (word[i] === word[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}
  
// @lc code=end
console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('FlagG'));

