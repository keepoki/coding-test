/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  const array = [];
  for (let i = 0; i <= n; i++) {
    array.push(i.toString(2).split('').filter((v) => v === '1').length);
    // array.push(i.toString(2).replace(/0/g, '').length);
  }
  return array;
};
// @lc code=end

console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]

/**
 * AI가 작성한 방법 비트 연산자를 활용하여 계산하였다.
 * 성능이 월등히 뛰어나다.
 * @param {number} n
 * @return {number[]}
 */
const countBits2 = (n) => {
  const array = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    array[i] = array[i >> 1] + (i & 1);
  }
  return array;
};

console.log(countBits2(6)); // [0,1,1,2,1,2,2]

/**
 * AI가 작성한 방법을 분석해보자.
 * input: n = 6
 *
 * array[i] = array[i >> 1] + (i & 1)을 계산하면 다음과 같다.
 * (i & 1)의 경우 뒤에 숫자가 1이므로 첫 번째 비트를 대상으로 AND 연산을 수행한다.
 *
 * 1. 0(0b0) >> 1 = 0(0b0), 0(0b0) & 1 = 0
 * array[0]은 0이다. 0 + 0 = 0이 된다.
 *
 * 2. 1(0b1) >> 1 = 0(0b0), 1(0b1) & 1 = 1
 * array[1]은 1이다. 0 + 1 = 1이 된다.
 *
 * 3. 2(0b10) >> 1 = 1(0b1), 2(0b10) & 1 = 0
 * array[2]은 1이다. 1 + 0 = 1이 된다.
 *
 * 4. 3(0b11) >> 1 = 1(0b1), 3(0b11) & 1 = 1
 * array[3]은 1이다. 1 + 1 = 2이 된다.
 *
 * 5. 4(0b100) >> 1 = 2(0b10), 4(0b100) & 1 = 0
 * array[4]은 1이다. 1 + 0 = 1이 된다.
 *
 * 6. 5(0b101) >> 1 = 2(0b10), 5(0b101) & 1 = 1
 * array[5]은 2이다. 1 + 1 = 2이 된다.
 *
 * 7. 6(0b110) >> 1 = 3(0b11), 6(0b110) & 1 = 0
 * array[6]은 2이다. 2 + 0 = 2이 된다.
 */