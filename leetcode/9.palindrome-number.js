/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) return false;
  const reverseX = reverseNumber(x);
  return x == reverseX;
};

/**
 * @param {number} n 
 * @returns {number}
 */
function reverseNumber(n) {
  let reverseNum = 0;
  // ~~ => Math.floor()
  for (let i = n; i > 0; i = ~~(i/10)) {
    reverseNum = reverseNum * 10 + i % 10;
  }
  return reverseNum;
}
// @lc code=end

/**
 * 정수 x가 주어진다. x를 좌우 반전 시켰을 때 
 * 이전과 같으면 true 아니면 false를 반환해야 한다.
 */
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(144)); // false
console.log('-----------------------------------');

// 다른 풀이 방법
function isPalindrome2 (x) {
  return x == Number(x.toString().split('').reverse().join(''));
}

console.log(isPalindrome2(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(144)); // false
