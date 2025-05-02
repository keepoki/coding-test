/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * t 문자열에서 s 문자열의 순서대로 포함되어 있는지 확인해야 한다.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let sArray = s.split('');
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    const char = sArray[i];
    for (let j = left; j < t.length; j++) {
      const target = t[j];
      if (char === target) {
        sArray.splice(i, 1);
        i--;
        left = j + 1;
        break;
      }
    }
  }

  return sArray.length < 1;
};
// @lc code=end

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('acb', 'ahbgdc')); // false
console.log(isSubsequence('aaaaaa', 'bbaaaa')); // false

/**
 * 뤼튼 AI의 풀이, 새로운 배열을 사용하지 않아 메모리 절약이 되고
 * 새로운 배열의 요소 제거를하지 않아 성능 최적화가 더 잘 되어있다.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence2 = (s, t) => {
  let sIndex = 0;
  let tIndex = 0;

  // 두 문자열을 순회하면서 부분 수열 확인
  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++; // s의 현재 문자가 t의 현재 문자와 같으면 s의 인덱스 증가
    }
    tIndex++; // t의 인덱스는 항상 증가
  }

  // s의 모든 문자를 t에서 찾았는지 확인
  return sIndex === s.length;
};

console.log(isSubsequence2('abc', 'ahbgdc'));
console.log(isSubsequence2('acb', 'ahbgdc'));
console.log(isSubsequence2('aaaaaa', 'bbaaaa'));