/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const romaNumberSymbols = { 
    IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900, 
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  let result = 0, index = -1, subStr = '';

  while (s.length > 0) {
    for (const key in romaNumberSymbols) {
      index = s.indexOf(key);
      if (index > -1) {
        subStr = s.substring(index, index + key.length);
        result += romaNumberSymbols[subStr];
        subStr && (s = s.replace(subStr, ''));
      }
    }
  }

  return result;
};
// @lc code=end
