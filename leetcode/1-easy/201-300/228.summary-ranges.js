/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 * 연속된 숫자들을 범위로 묶어서 표현하는 문제이다.
 */
const summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  const result = [];
  let start = nums[0];
  let end = nums[0];
  
  for (let i = 1; i <= nums.length; i++) {
    // 연속된 숫자인지 확인하여 끝 범위를 갱신한다.
    if (nums[i - 1] === nums[i] - 1) {
      end = nums[i];
    } else {
      // 연속된 숫자가 아니라면 범위를 추가한다. (시작과 끝이 같으면 단일 숫자)
      result.push(start === end ? `${start}` : `${start}->${end}`);
      // 새로운 범위의 시작과 끝을 현재 숫자로 설정
      start = nums[i];
      end = nums[i];
    }
  }

  return result;
};
// @lc code=end

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]