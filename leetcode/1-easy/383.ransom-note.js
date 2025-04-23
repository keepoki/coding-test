/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  // 문자열을 각각의 배열로 만든다.
  const ransomNoteArr = ransomNote.split('');
  const magazineArr = magazine.split('');

  // magazine의 글자를 이용하여 ransomNote를 구성할 수 있는지 판단한다.
  for (let i = 0; i < magazineArr.length; i++) {
    const char = magazineArr[i];
    const index = ransomNoteArr.indexOf(char);
    if (index === -1) continue;

    // 구성할 수 있다면, 탐색 목록에서 뺀다.
    ransomNoteArr.splice(index, 1);
    magazineArr.splice(i, 1);
    --i;

    // 더 이상 찾을 수 없으면 구성할 수 있는 모든 문자를 찾았다는 뜻이다.
    if (ransomNoteArr.length < 1) return true;
  }

  return false;
};
// @lc code=end

console.log(canConstruct('aa', 'aab'));


/**
 * AI 뤼튼의 풀이, 오브젝트 값으로 카운트한 방식, 더 성능이 좋다.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct2 = (ransomNote, magazine) => {
  const magazineCount = {};

  // magazine의 각 문자의 개수를 세기
  for (const char of magazine) {
    magazineCount[char] = (magazineCount[char] || 0) + 1;
  }

  // ransomNote의 각 문자가 magazine에 있는지 확인
  for (const char of ransomNote) {
    if (!magazineCount[char]) {
      return false; // 해당 문자가 없으면 false 반환
    }
    magazineCount[char]--; // 사용한 문자의 개수 감소
  }

  return true; // 모든 문자를 사용할 수 있으면 true 반환
};

console.log(canConstruct2("a", "b")); // false
console.log(canConstruct2("aa", "ab")); // false
console.log(canConstruct2("aa", "aab")); // true