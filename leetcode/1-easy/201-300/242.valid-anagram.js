/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  // 내가 푼 방식, 하나씩 문자를 지워나가면서 길이를 비교
  while (s.length > 0 && t.length > 0) {
    s = s.replace(t[0], '');
    t = t.replace(t[0], '');

    if (s.length !== t.length) {
      return false;
    }
  }

  return true;
};
// @lc code=end

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('aa', 'a')); // false

// 다른 방식의 풀이 (가장 빠르고, 메모리 효율적)
// 각 문자의 출현 횟수를 객체에 저장하여 비교하는 방법
function isAnagram2(s, t) {
  const charCount = {};

  // 첫 번째 문자열의 각 문자 카운트
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // 두 번째 문자열의 각 문자 카운트 감소
  for (const char of t) {
    // 문자가 없거나 카운트가 0이면 애너그램이 아님
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// 다른 방식의 풀이
// 문자열을 배열로 변환시켜 정렬하고 다시 문자열로 바꿔 비교하는 방법
// const isAnagram3 = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');
function isAnagram3(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}
