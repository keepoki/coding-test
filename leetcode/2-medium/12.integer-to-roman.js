/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * 숫자에 대응하는 로마 숫자 문자열을 리턴해야한다.
 * 1. 큰 숫자부터 작은 숫자 순서대로 변환해야 한다.
 * 2. 4나 9로 시작하는 숫자는 특별한 감산 표현(subtractive form)을 사용한다.
 * 3. 같은 기호는 최대 3번까지만 반복 가능하다.
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const romanSymbol = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  let roman = '';
  const romanNums = Object.keys(romanSymbol).sort((a, b) => b - a);
  let romanNum = 0;
  for (let i = 0; i < romanNums.length; i++) {
    romanNum = romanNums[i];
    while (num >= romanNum) {
      roman += romanSymbol[romanNum];
      num -= romanNum;
    }
  }

  return roman;
};
// @lc code=end

console.log(intToRoman(3749));

/**
 * GPT-4의 풀이, 다른점은 값을 배열로 구성하여 값과 심볼을 나누었다는 점이다.
 * 하지만 성능이 더 뛰어나다. 내가 푼 방식은 Object.keys와 sort로 인해
 * 시간이 좀 더 걸린다.
 * @param {number} num
 * @return {string}
 */
function intToRoman2(num) {
  // 값과 대응하는 로마 숫자 배열 (큰 숫자부터 정렬됨)
  const val = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];

  const symbol = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      num -= val[i];
      result += symbol[i];
    }
  }

  return result;
}