/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  if (n < 2) return n;
  // return fib(n - 1) + fib(n - 2);

  let prev = 0;
  let curr = 1;
  let next = 0;
  for (let i = 2; i <= n; ++i) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};
// @lc code=end
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13


/**
 * GPT-4o의 풀이, 재귀와 메모이제이션을 활용한 방법이다.
 * @param {number} n
 * @param {Object} memo
 * @return {number}
 */
const fib2 = (n, memo = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memo[n] !== undefined) return memo[n];

  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  return memo[n];
};

// console.log(fib2(4)); // 3
// console.log(fib2(5)); // 5
// console.log(fib2(6)); // 8
// console.log(fib2(7)); // 13