/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * 1. 0또는 1인 이진수로 이루어진 배열이 입력된다.
 * 2. 배열을 순회하여 값이 1인 숫자의 인접한 개수를 누적시킨다.
 * 3. 0을 만나면 개수를 0으로 초기화 시킨다.
 * 4. 인접한 개수 중 가장 큰 값을 저장하여 반환한다.
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num == 1) {
      count++;
    } else {
      count = 0;
    }

    if (max < count) {
      max = count;
    }
  }

  return max;
};
// @lc code=end

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // 2