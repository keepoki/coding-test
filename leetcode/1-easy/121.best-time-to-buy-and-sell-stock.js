/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    // 현재 가격이 최소 가격보다 작으면 갱신
    if (price < minPrice) {
      minPrice = price;
    } else {
      // 이익 계산
      const profit = price - minPrice;

      // 최대 이익과 비교하여 갱신
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return  maxProfit;
};
// @lc code=end

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([2,4,1])); // 2
console.log(maxProfit([3,2,6,5,0,3])); // 4
