/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
  let rows = 1;
  while (n >= rows) {
    n -= rows;
    rows++;
  }

  return rows - 1;
};
// @lc code=end

console.log(arrangeCoins(5));
console.log(arrangeCoins(1));
