/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function (n) {
  /*
    인수로 넘어온 10진수를 2진법으로 바꾸었을 때 1의 개수를 구하는 문제이다.
    toString(2)로 2진법으로 변환한 다음 split('')로 문자열로 분할한 후
    filter()로 '1'만 필터링하고 length로 길이를 세면 1의 개수를 구할 수 있다.

    11 -> '1011' -> ['1', '0', '1', '1'] -> ['1'] -> 1

    128 -> '10000000' -> ['1', '0', '0', '0', '0', '0', '0', '0']
    -> ['1', '0', '0', '0', '0', '0', '0', '0'] -> 8
  */
  return n.toString(2).split('').filter(ele => ele == '1').length;
};
// @lc code=end

console.log(hammingWeight(11)); // 3
console.log(hammingWeight(128)); // 1
console.log(hammingWeight(2147483645)); // 30