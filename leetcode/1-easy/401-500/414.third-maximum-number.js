/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * 주어진 숫자 중에 세 번째로 큰 숫자를 찾는 것인데
 * 세 번째 숫자가 없으면 제일 큰 수를 반환해야 한다.
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  // 중복을 제거하고 내림차순으로 정렬하는 배열을 만든다.
  const descNums = [...new Set(nums)].sort((a, b) => b - a);
  let thirdMaximum = 0;

  for (let i = 0; i < 3; i++) {
    const num = descNums[i];
    // 세 번째 숫자가 없는 경우 제일 큰 수를 반환한다.
    if (descNums[i] == null) {
      return descNums[0];
    }
    thirdMaximum = num;
  }

  return thirdMaximum;
};
// @lc code=end

console.log(thirdMax([1, 2]));
console.log(thirdMax([3, 2, 1]));
