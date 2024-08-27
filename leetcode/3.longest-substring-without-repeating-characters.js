/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const scanner = [];
  let longest = 0;

  for (const char of s) {
    const findIndex = scanner.indexOf(char);
    if (findIndex !== -1) {
      scanner.splice(0, findIndex + 1);
    };
    scanner.push(char);
    longest = Math.max(longest, scanner.length);
  }

  return longest;
};
// @lc code=end

/*
  문자열이 주어지고, 문자를 반복하지 않은 문자 중에서
  가장 긴 문자열의 길이를 구해야한다.
  'pwwkew'의 경우 scanner의 변화는 아래와 같다.
  p => pw => w => wk => wke => kew
  scanner에서 중복되는 글자가 있으면 splice 메서드를 이용해서
  첫 번째 원소부터 중복 되는 문자의 원소까지 포함하여 배열에서 제거한다.

  | char | findIndex | scanner | longest |
  |------|-----------|---------|---------|
  | p    | -1        | p       | 1       |
  | w    | -1        | p, w    | 2       |
  | w    | 1         | w       | 1       |
  | k    | -1        | w, k    | 2       |
  | e    | -1        | w, k, e | 3       |
  | w    | 0         | k, e, w | 3       |
 */

console.log (lengthOfLongestSubstring('pwwkew')); // 3, 'wke', 'kew' length