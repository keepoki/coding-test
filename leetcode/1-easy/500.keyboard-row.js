/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * 키보드에서 첫 번째, 두 번째, 세 번째 줄에 해당하는 대소문자 구분 없는 알파벳
 * 으로 이루어진 단어들을 리턴해야 한다.
 * 1. 첫 번째, 두 번째, 세 번째 줄에 해당하는 알파벳들을 정의
 * 2. 배열의 요소의 첫번 째 문자를 찾아서 몇 번째 줄을 확인할지 정한다.
 * 3. 줄이 정해졌다면, 요소의 문자 하나하나를 해당 줄에 포함되는지 비교한다.
 * 4. 모든 문자가 해당 줄에 포함된다면, 리턴 배열에 추가한다.
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  const firstRowChars = 'qwertyuiopQWERTYUIOP';
  const secondRowChars = 'asdfghjklASDFGHJKL';
  const thirdRowChars = 'zxcvbnmZXCVBNM';
  
  const wordChecker = (chars, word) =>
    [...word].every(char => chars.includes(char));

  const result = [];
  let isWordPass = false;
  for (const word of words) {
    const firstChar = word[0];
    if (firstRowChars.includes(firstChar)) {
      isWordPass = wordChecker(firstRowChars, word);
    } else if (secondRowChars.includes(firstChar)) {
      isWordPass = wordChecker(secondRowChars, word);
    } else if (thirdRowChars.includes(firstChar)) {
      isWordPass = wordChecker(thirdRowChars, word);
    }

    if (isWordPass) {
      result.push(word);
    }
  }

  return result;
};
// @lc code=end

console.log(findWords(["Hello","Alaska","Dad","Peace"])); // [ 'Alaska', 'Dad' ]
console.log(findWords(["omk"])); // []
console.log(findWords(["adsdf","sfd"])); // [ 'adsdf', 'sfd' ]

// @lc code=start
/**
 * GPT-4o의 풀이, 가독성이 좋고 깔끔한 코드이다.
 * isInSameRow 함수에서 word를 소문자로 바꾸는 과정과
 * words.filter에서 함수를 OR 연산으로 실행하고 있다는 점이 처리 속도에 조금 아쉽다.
 *
 * Array.includes와 Set.has의 탐색 속도가 궁금해졌다.
 * Set.has가 월등히 탐색이 빠르다. Set은 해시 테이블로 이루어져 있기 때문이다.
 * 다만, 대규모 데이터셋이나 중복 요소가 많은 배열에서는 잘 작동하지 않을 수 있다.
 * Array.includes는 선형 구조로 탐색하기 때문에 Set has에 비해서 조회가 느린편이다.
 * https://www.measurethat.net/Benchmarks/Show/7818/0/sethas-vs-arrayincludes#latest_results_block
 * https://www.measurethat.net/Benchmarks/Show/8768/0/sethas-vs-arrayincludes-vs-arrayindexof-string-values
 * @param {string[]} words
 * @return {string[]}
 */
const findWords2 = (words) => {
  const row1 = new Set('qwertyuiopQWERTYUIOP');
  const row2 = new Set('asdfghjkl');
  const row3 = new Set('zxcvbnm');

  const isInSameRow = (word, rowSet) =>
    [...word.toLowerCase()].every(char => rowSet.has(char));

  return words.filter(word =>
    isInSameRow(word, row1) ||
    isInSameRow(word, row2) ||
    isInSameRow(word, row3)
  );
};


// @lc code=start
/**
 * GPT-4o의 풀이에 대한 아쉬움을 개선해보았다.
 * @param {string[]} words
 * @return {string[]}
 */
const findWords3 = (words) => {
  const row1 = new Set('qwertyuiopQWERTYUIOP');
  const row2 = new Set('asdfghjklASDFGHJKL');
  const row3 = new Set('zxcvbnmZXCVBNM');

  const isInSameRow = (word, rowSet) =>
    [...word].every(char => rowSet.has(char));

  return words.filter((word) => {
    const firstChar = word[0];
    if (row1.has(firstChar)) {
      return isInSameRow(word, row1);
    } else if (row2.has(firstChar)) {
      return isInSameRow(word, row2);
    } else if (row3.has(firstChar)) {
      return isInSameRow(word, row3);
    }
  });
};
