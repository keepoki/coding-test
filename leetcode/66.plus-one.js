/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  // JS 기준의 간단한 풀이 (생각외로 아래 풀이 방식보다 빠르다..)
  // return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(ele => Number(ele)) ;

  // 좀 더 원시적인 방법의 풀이
  let i = digits.length - 1;

  digits[i]++; // 마지막 숫자 1 증가

  // 마지막 요소부터 1을 증가시켜 10이라면 0으로 바꾸고, 왼쪽 요소의 값을 1 증가 시킨다.
  while(digits[i] === 10 && i > 0) {
    digits[i] = 0;
    digits[--i]++;
  }

  // 마지막으로 1을 증가 시킨 요소가 10이라면 1로 바꾸고 마지막 요소에 0을 추가한다.
  if (digits[i] === 10) {
    digits[i] = 1;
    digits.push(0);
  }

  return digits;
};
// @lc code=end

console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log(plusOne([9,9]));

/*
  처음 생각한 방법은 반복문을 통해 10단위로 곱하고 나누는 방식으로 생각했지만,
  숫자의 크기가 너무 커서 실패하였다. digits의 길이가 100까지 가능하여
  Number 자료형의 범위를 초과하게 되면서 문제를 발생하였다.
  문제에서 주어진 제약 조건에 대해 더 자세히 살펴볼 필요가 있다.
*/