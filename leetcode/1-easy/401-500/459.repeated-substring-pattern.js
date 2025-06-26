/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  const len = s.length;
  let count = 1;
  let nextIdx = count;
  while (len > count) {
    const findStr = s.slice(0, count);
    if (findStr === s.slice(nextIdx, nextIdx + count)) {
      nextIdx += count;
    } else if (nextIdx >= len) {
      return true;
    } else {
      count++;
      nextIdx = count;
    }

    if (count > len / 2) {
      return false;
    }
  }

  return false;
};
// @lc code=end

// console.log(repeatedSubstringPattern("ab")); // false
// console.log(repeatedSubstringPattern("bb")); // true
// console.log(repeatedSubstringPattern("abab")); // true
// console.log(repeatedSubstringPattern("ababab")); // true
// console.log(repeatedSubstringPattern("ababba")); // false

/**
 * @param {string} s
 * @return {boolean}
 * GPT-3.5의 풀이, 정말 심플하다.. 생각하지 못한 방법!
 */
const repeatedSubstringPattern2 = (s) => {
  // 문자열을 두 번 이어붙여서 (s + s) 그 안에서 처음과 마지막을 제외하고 s가 다시 등장하면 반복된 구조라는 뜻입니다.
  const doubled = (s + s).slice(1, -1);
  return doubled.includes(s);
}

console.log(repeatedSubstringPattern2("ab")); // false
console.log(repeatedSubstringPattern2("bb")); // true
console.log(repeatedSubstringPattern2("abab")); // true
console.log(repeatedSubstringPattern2("ababab")); // true
console.log(repeatedSubstringPattern2("ababba")); // false

/*
  - s + s를 하면, 예를 들어 "abab" → "abababab" 이 됩니다.
  - 그 중 처음과 끝을 제거하면 "bababa" 가 되죠.
  - 만약 s가 반복되는 구조라면 이 안에 원래 문자열 s가 포함됩니다.
  - 반복이 아니라면 포함되지 않습니다
 */