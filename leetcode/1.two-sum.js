/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  // 최적화를 위해 map 자료구조르 활용하여 캐싱 처리를 한다.
  const numMap = new Map();
  let num, diff, cache;
  for (let i = 0; i < nums.length; ++i) {
    num = nums[i];
    diff = target - num;
    cache = numMap.get(diff);
    if (cache !== undefined) return [cache, i];
    numMap.set(num, i);
  }

  return [0, 0];
};
// @lc code=end

/*
  정수로 이루어진 배열 nums와 목표로 하는 정수 target이 주어지는데
  nums에서 임의의 숫자 두 개에 대한 합계가 target과 같은 것을 찾아서
  임의의 숫자 두 개에 대한 인덱스를 배열로 리턴 해야한다.
  동일한 인덱스는 리턴하지 못한다.
 */

// 처음 풀었던 방법
function twoSum2(nums, target) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
