/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (!strs) return '';
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
// @lc code=end

// ** first ** 
// function longestCommonPrefix(strs) {
//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (!strs[i].startsWith(prefix)) {
//       prefix = prefix.slice(0, -1);
//     }

//     if (prefix === '') {
//       return prefix;
//     }
//   }

//   return prefix;
// }