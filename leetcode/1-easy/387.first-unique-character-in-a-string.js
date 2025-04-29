/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * 반복 사용되지 않은 문자 중에 첫 번째 요소의 인덱스를 반환해야하는 문제이다.
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const sCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    sCount[char] = (sCount[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (sCount[char] === 1) return i;
  }

  return -1;
};
// @lc code=end

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('db')); // 0
console.log(firstUniqChar('dacca')); // 0


/**
 * 첫 번째 요소부터 탐색하여 찾은 인덱스와
 * 마지막 번째 요소부터 탐색하여 찾은 인덱스가
 * 같으면 해당 요소는 1개라는 의미이다. (반복되지 않는다.)
 * @param {string} s
 * @return {number}
 */
const firstUniqChar2 = (s) => {
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar2('leetcode')); // 0
console.log(firstUniqChar2('db')); // 0
console.log(firstUniqChar2('dacca')); // 0