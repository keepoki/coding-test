/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  /*
    00000010100101000001111010011100을 toString(2) 함수로 변환하면
    앞에 있는 0은 지워져 다음과 같아진다. 10100101000001111010011100
    문제를 보자면 32비트의 2진수로 되어 있어서 32개를 맞춰주어야 한다.
  */

  // 숫자를 2진법 문자열로 변환 -> 배열로 변환 -> 배열을 역순으로 변환
  const array = n.toString(2).split('').reverse();

  // 뒤집어진 숫자에 32비트를 맞추기 위하여 0으로 채움
  for (let i = array.length; i < 32; i++) {
    array.push(0);
  }

  // 배열 -> 배열 요소들을 합쳐 문자열로 변환 -> 2진법 숫자로 변환
  return parseInt(array.join(''), 2);
};

// @lc code=end

// javascript에서는 2진법 숫자를 나타내는 규칙은 '0b'로 시작하는 것이다.
console.log(reverseBits(0b00000010100101000001111010011100));