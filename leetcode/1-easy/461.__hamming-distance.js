/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * https://ko.wikipedia.org/wiki/%ED%95%B4%EB%B0%8D_%EA%B1%B0%EB%A6%AC
 * 해밍 거리는 같은 길이의 두 문자열에서, 같은 위치에서 서로 다른 기호들이 몇 개인지를
 * 세는 것을 말한다.
 * 서로 겹치지 않는 비트의 거리를 구하는 것인데, 겹치지 않게 하기위해 XOR연산을 사용한다.
 * 방법이 떠오르지 않아 gpt-4o-mini의 도움을 받음
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => (x ^ y).toString(2).split('1').length - 1;
// @lc code=end

console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(3, 1)); // 1

/**
 * gpt-4o-mini의 다른 풀이
 * @param {number} x
 * @param {number} y
 * @returns number
 */
const hammingDistance2 = (x, y) => {
  let xor = x ^ y; // XOR 연산
  let count = 0;

  while (xor !== 0) {
    count += xor & 1; // 마지막 비트가 1이면 카운트
    xor = xor >>> 1;  // 비트를 오른쪽으로 이동 (0으로 채움)
  }
  return count;
}