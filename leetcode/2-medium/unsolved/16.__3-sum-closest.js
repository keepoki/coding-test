/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * 풀이에 실패하여 GPT-4의 도움을 받음
 *
 * 길이 n의 정수 배열과 정수 목표가 주어졌을 때, 합이 타겟에 가장 가까운 3개의 정수를
 * 찾으세요.
 * 타겟에 가장 가까운 세 정수의 합을 반환해야 한다.
 *
 * 이전 문제와 상당히 똑같음에도, 틀려버림..., 소스 코드를 보고 아차 싶더라
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  // 숫자 찾는 반복을 줄이기 위한 정렬
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];

  // 모든 경우에 수에 대한 탐색
  for (let i = 0; i < nums.length - 2; i++) {
    // 중복되면 건너뛴다.
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return closest;
};
// @lc code=end

// console.log(threeSumClosest([0,0,0], 1));
// console.log(threeSumClosest([-1,2,1,-4], 1));
// console.log(threeSumClosest([1,1,1,0], -100));
// console.log(threeSumClosest([1,1,1,1], -100));
// console.log(threeSumClosest([10,20,30,40,50,60,70,80,90], 1));
// console.log(threeSumClosest([1,1,1,1], 3));