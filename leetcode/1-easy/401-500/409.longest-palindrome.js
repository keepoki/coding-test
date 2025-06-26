/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * 주어진 문자열을 가지고 대칭을 이룰 수 있는 문자들을 찾아 그 개수를 반환해야 한다.
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const sCount = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    sCount[char] = (sCount[char] || 0) + 1;
  }


  let result = 0, isOdd = false;
  for (const key in sCount) {
    const value = sCount[key];
    // 같은 문자의 개수가 짝수라면 대칭을 이룰 수 있다.
    if (value % 2 == 0) {
      result += value;
    } else if (value % 2 == 1) {
      // 1을 빼서 홀수도 짝수로 사용할 수 있도록 한다.
      result += value - 1;
      isOdd = true;
    }
  }

  // 홀수가 존재한다면 1개만 가운데에 두고 대칭을 이룬다.
  if (isOdd) {
    result += 1;
  }

  return result;
};
// @lc code=end

console.log(longestPalindrome('bananas')); // 5
console.log(longestPalindrome('abccccdd')); // 7
console.log(longestPalindrome('accc')); // 3
console.log(longestPalindrome('bbcc')); // 4