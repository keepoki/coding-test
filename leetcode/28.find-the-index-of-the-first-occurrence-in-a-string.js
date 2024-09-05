/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  // 처음 푼 방식. JS라면 메서드를 사용하여 쉽게 풀 수 있다.
  return haystack.indexOf(needle);

  // 메서드를 사용하지 않고 원초적인 방법으로 푼 풀이
  // let findSuccess = false;
  // for(let i = 0; i < haystack.length; i++) {
  //   for (let k = 0; k < needle.length; k++) {
  //     if (haystack[i + k] !== needle[k]) {
  //       findSuccess = false;
  //       break;
  //     }
  //     findSuccess = true;
  //   }

  //   if (findSuccess) {
  //     return i;
  //   }
  // }

  // return -1;
};
// @lc code=end

// const result = strStr('sadbutsad', 'sad');
// const result = strStr('leetcode', 'leeto');
const result = strStr('mississippi', 'issip');

console.log(result);