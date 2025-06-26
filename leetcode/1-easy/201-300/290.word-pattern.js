/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * 교차 검증이 필요한 문제이다. 따라서 교차로 데이터를 저장하고 비교한다.
 * 자바스크립트에서 'Object {}'를 사용하면 constructor 문자열을 생성자로
 * 인식하는 문제가 있어서 Map으로 작성하였다.
 * 예) obj[constructor] => function
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const words = s.split(' ');
  const charToWord = new Map();
  const wordToChar = new Map();

  // 패턴과 단어가의 갯수가 다를 수 있다.
  if (words.length != pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // key: a, value: dog
    if (!charToWord.has(char)) {
      charToWord.set(char, word);
    }

    // key: dog, value: a
    if (!wordToChar.has(word)) {
      wordToChar.set(word, char);
    }

    if (charToWord.has(char) && charToWord.get(char) !== word) {
      return false;
    }

    if (wordToChar.has(word) && wordToChar.get(word) !== char) {
      return false;
    }
  }

  return true;
};
// @lc code=end

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));
console.log(wordPattern('abba', 'dog constructor constructor dog'));
console.log(wordPattern('aaa', 'aa aa aa aa'));