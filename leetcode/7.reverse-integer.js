/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const reversNum = reverseTheNumber(x);
  if (Math.abs(reversNum) > Math.pow(2, 31)) return 0;
  return reversNum;
};

/**
 * @param {number} num
 * @returns {number}
 */
function reverseTheNumber(num) {
  if (typeof num !== 'number') return 0;
  return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

// @lc code=end

/** 
 * 부호 32비트 정수 x가 주어졌을 때, 숫자를 반대로 뒤집어 x를 반환해야 한다.
 * x를 반대로 하면 값이 부호 32비트 정수 범위를 벗어나므로 0을 반환한다.
 * 부호 32비트 정수까지 표현할 수 있다는 것은 2^31 값 이하를 의미한다.
 * 즉 2147483648 이하의 값보다 작거나 같아야 한다. (음수의 경우 절대값으로 변경)
 * 
 * 양수와 음수 부호 관련 Math.sign 메서드를 발견해서 응용하였다.
 * Math.sign 인수와 리턴은 다음과 같다.
 * 0 => 0, -0 => -0, 양의 수 => 1, 음의 수 => -1, 그외 => NaN
 * 다만 숫자 값의 문자열은 변환된다. 예) '-1' => -1로 변환하여 판단
 * 
 * Math.sign 대신 String.includes('-')을 사용하는 방식으로도 부호 판단이 가능하다.
 */

console.log(reverse(44002233)); // 33220044
console.log(reverse(-321)); // -123
console.log(reverse(1534236469)); // 0, 뒤집으면 32비트 정수 범위를 벗어난다.
console.log(reverse(-2147483648)); // 0, 뒤집으면 32비트 정수 범위를 벗어난다.
console.log(2 ** 31); // 2147483648, 부호 32비트 정수 최대 값 
console.log(reverseTheNumber(1534236469)); // 9646324351, 부호 32비트 초과