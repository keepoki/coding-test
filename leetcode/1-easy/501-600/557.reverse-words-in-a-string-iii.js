/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * 띄어씌기로 구분 되어있는 단어들을 뒤집는 문제이다.
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => s
  .split(' ')
  .map(word => word.split('').reverse().join(''))
  .join(' ');

// @lc code=end

console.log(reverseWords(`Let's take LeetCode contest`));
/**
 * 아주 원초적인 방법의 풀이
 * @param {string} s
 * @return {string}
 */
const reverseWords2 = (s) => {
  let result = '';
  let word = '';

  for (let i = 0; i <= s.length; i++) {
    const char = s[i];

    if (char === ' ' || i === s.length) {
      for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
      }

      if (char === ' ') {
        result += ' ';
      }
      
      word = '';
    } else {
      word += char;
    }
  }

  return result;
};

console.log(reverseWords2(`Let's take LeetCode contest`));
