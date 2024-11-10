/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  let parts = '', words = [];
  for(let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (parts !== '') {
        words.push(parts);
      }
      parts = '';
    } else {
      parts += s[i];
    }
  }

  if (parts !== '') {
    words.push(parts);
  }

  return words[words.length - 1].length;
};
// @lc code=end

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));
console.log(lengthOfLastWord('Today is a nice day'));