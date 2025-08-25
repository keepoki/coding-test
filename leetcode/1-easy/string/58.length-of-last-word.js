/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 * Tags: string
 */

// @lc code=start
/**
 * ## 문제
 * 단어와 공백으로 이루어진 문자열 s가 주어졌을 때, 문자열에서 마지막 단어의 길이를
 * 반환하세요. 단어는 공백이 아닌 문자들로만 구성된 최대 부분 문자열입니다.
 *
 * ## 예시
 * 예제 1:
 * 입력: s = "Hello World"
 * 출력: 5
 * 설명: 마지막 단어는 "World"이고 길이는 5입니다.
 *
 * 예제 2:
 * 입력: s = "   fly me   to   the moon  "
 * 출력: 4
 * 설명: 마지막 단어는 "moon"이고 길이는 4입니다.
 *
 * 예제 3:
 * 입력: s = "luffy is still joyboy"
 * 출력: 6
 * 설명: 마지막 단어는 "joyboy"이고 길이는 6입니다.
 *
 * ## 제약 조건
 * 1. 1 <= s.length <= 104
 * 2. s는 영어 문자와 공백 ' '으로만 구성됩니다.
 * 3. s에는 적어도 하나의 단어가 있습니다.
 *
 * ## 문제 요약
 * 공백을 제외한 마지막 단어의 길이를 반환한다.
 *
 * ## 풀이 과정
 * ###  자바스크립트로 간단하게 푸는 방식
 * 자바스크립트에서 간단하게 푸는 방식 문자열의 앞뒤 공백을 제거하는 trim() 메서드를
 * 사용하고, split(' ') 메서드로 공백(' ')을 구분자로 배열로 만들어서 마지막 요소에 대한
 * 길이를 반환한다. pop().length
 *
 * ### 나만의 풀이
 * 맨 뒤에서부터 순회하면서 공백을 만나면 건너뛰고 문자를 만나면 길이를 1씩 늘려서
 * 다음 공백을 만나는 시점에 길이를 반환한다.
 *
 * ## 풀이 요약
 * 문자열의 끝에서부터 역순으로 탐색하여 공백을 건너뛰고 마지막 단어의 길이를 카운트 한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 60/60 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 80.73 % of javascript submissions (53.2 MB)
 *
 * ## 점검
 * 만족스럽게 최적화가 된 방식인 것 같다.
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  // 자바스크립트에서 간단하게 푸는 방식
  // return s.trim().split(' ').pop().length;

  let wordLength = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (wordLength > 0 && char === ' ') {
      return wordLength;
    } else if (char == ' ') {
      continue;
    }
    wordLength++;
  }

  // 공백이 없는 경우도 있어서 단어의 길이를 반환 한다.
  return wordLength;
};
// @lc code=end

console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('a'));


/**
 * Claude - Sonnet 4의 풀이
 *
 * == 대용량 데이터 성능 측정 ===
 * 나의 풀이: 0.95ms
 * 내장 메서드: 133.25ms
 * 정규식: 29.89ms
 * 역방향 탐색: 0.42ms
 * lastIndexOf: 0.09ms
 */

// 방법 1: 내장 메서드 활용 (가장 간결하고 가독성 좋음)
const lengthOfLastWord1 = (s) => {
    return s.trim().split(' ').pop().length;
};

// 방법 2: 정규식 활용 (한 줄로 해결)
const lengthOfLastWord2 = (s) => {
    return s.trim().match(/\S+$/)[0].length;
};

// 방법 3: 역방향 탐색 최적화 (메모리 효율적)
const lengthOfLastWord3 = (s) => {
    let i = s.length - 1;
    
    // 뒤쪽 공백 건너뛰기
    while (i >= 0 && s[i] === ' ') i--;
    
    // 마지막 단어 길이 카운트
    let length = 0;
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    return length;
};

// 방법 4: lastIndexOf 활용 (성능 좋음)
const lengthOfLastWord4 = (s) => {
    const trimmed = s.trim();
    const lastSpaceIndex = trimmed.lastIndexOf(' ');
    return trimmed.length - lastSpaceIndex - 1;
};