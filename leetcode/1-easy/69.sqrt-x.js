/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let result = 0;
  for (let i = 1; i <= x; i++) {
    if (i * i > x) {
      break;
    }
    result = i;
  }

  return result;
};
// @lc code=end

/*
  처음에 어렵게 생각해서, 어렵고 복잡한 방식으로 여러 조건들을 생각하고 추가해서
  분기 처리하도록 생각했지만, 결국 리턴하는 값은 정수이므로 i * i > x 조건만이
  핵심이었다. 예를 들어 x가 8이고 i는 3이라면 3 * 3 > 8 조건에 맞아서 반복문을
  빠져온다. 반복문이 실행되는 동안에는 i의 값을 저장하여 이전 값인 2를 리턴하는
  것이다.
  2 * 2 보다 크거나 같으면서 3 * 3 보다 작은 x가 4 ~ 8이라면 2가,
  3 * 3 보다 크거나 같으면서 4 * 4 보다 작은 x가 9 ~ 15이라면 3이
  소수점을 없앤 정수형 제곱근이 된다.
*/

console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(4));
console.log(mySqrt(5));
console.log(mySqrt(6));
console.log(mySqrt(7));
console.log(mySqrt(8));
console.log(mySqrt(12));
console.log(mySqrt(15));
console.log(mySqrt(1085817232)); // 32951
console.log(mySqrt(2147483647)); // 46340