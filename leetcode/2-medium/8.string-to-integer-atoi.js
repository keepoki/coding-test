/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
  // left whitespace remove
  s = s.trim();
  if (s.length < 1) return 0;

  // check '-' and '+'
  const firstChar = s.charAt(0);
  let result = 0;
  let sign = 1;
  let start = 0;

  if (firstChar === '+') {
    start = 1;
  } else if (firstChar === '-') {
    sign = -1;
    start = 1;
  }

  // convert
  for (let i = start; i < s.length; ++i) {
    const char = s[i];
    if (!isNaN(char) && char !== ' ') { // ' ' is not NaN
      result = 10 * result + (char - 0);
    } else {
      break;
    }
  }

  // check the minimum, maximum and return
  const max = 2 ** 31 - 1;
  const min = max * -1 - 1;
  result *= sign;
  if (result > max) return max;
  if (result < min) return min;
  return result;
}

// @lc code=end

/**
 * 문자열을 32비트 부호 있는 정수로 바꿔 반환하는 문제이다. 조건은 아래와 같다.
 * 1. 왼쪽 빈 공백은 무시하라.
 * 2. 다음 문자(문자열 끝이 아닌 경우)가 '-' 또는 '+'인지 확인하고 최종 결과가
 * 음수 또는 양수인지 결정한다. 둘 다 없는 경우는 양수라고 가정한다.
 * 3. 숫자가 아닌 다음 문자 또는 입력의 끝에 도달할 때까지 다음 문자를 읽는다.
 * 나머지 문자열은 무시한다.
 * 4. 이 숫자를 정수로 변환한다.(예: "123" -> 123, "0032" -> 32)
 * 읽은 숫자가 없으면 정수는 0이 된다. 필요에 따라 부호를 변경한다.(2번 조건)
 * 5. 정수가 32비트 부호 있는 정수 범위를 벗어난 경우
 * 허용 가능한 최대(2³¹ - 1), 최소(-2³¹) 값으로 반환한다.
 * 6. 최종 결과로 정수를 반환한다.
 *
 * parseInt 메서드를 사용하면 쉽게 구현이 가능하겠지만
 * 이 문제의 요점은 parseInt 메서드와 같은 기능을 구현하는 데 있다.
 */

console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('words and 987')); // 0
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('-91283472332')); // -2147483648
console.log(myAtoi('21474836460')); // 2147483647
console.log(myAtoi('  -0012a42')); // -12
console.log(myAtoi('+-12')); // 0
console.log(myAtoi('.1')); // 0

// tHBp 님의 풀이, 정규 표현식에 대한 이해가 필요하지만 깔끔한 코드이다.
const myAtoi2 = function(str) {
  const MIN_VALUE = Math.pow(-2, 31);
  const MAX_VALUE = Math.pow(2, 31) - 1;
  const result = Number(str.trimLeft().match(/^[-\+]?\d+/));
  if(result < MIN_VALUE) return MIN_VALUE;
  if(result > MAX_VALUE) return MAX_VALUE;
  return result;
};

// dajavax 님의 풀이, 깔끔한 풀이이지만 이번 문제의 요점에서 벗어났다.
const myAtoi3 = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};