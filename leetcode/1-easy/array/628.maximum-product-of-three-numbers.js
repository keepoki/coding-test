/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 * Tags: array | math
 */

// @lc code=start
/**
 * ## 문제
 * 정수 배열 nums가 주어졌을 때, 세 수를 선택하여 그 곱이 최대가 되도록 하고
 * 그 최대 곱을 반환하시오.
 *
 * ## 예시
 * 예제 1:
 * 입력: nums = [1,2,3]
 * 출력: 6
 *
 * 예제 2:
 * 입력: nums = [1,2,3,4]
 * 출력: 24
 *
 * 예제 3:
 * 입력: nums = [-1,-2,-3]
 * 출력: -6
 *
 * ## 제약 조건
 * 1. 3 <= nums.length <= 10^4
 * 2. -1000 <= nums[i] <= 1000
 *
 * ## 풀이 과정
 * 음수 * 음수 * 양수도 가장 큰 수가 될 수 있다.
 * 1. 오름차순으로 정렬한다.
 * 2. 첫 번째 요소 x 두 번째 요소 x 마지막 요소의 값과
 *    마지막 요소 x 뒤에서 두 번째 요소 x 뒤에서 세 번째 요소 값을
 *    비교하여 더 큰 수를 반환한다.
 *
 * ## 풀이 요약
 * 정렬 후 가장 작은 두 요소와 가장 큰 요소의 곱, 가장 큰 세 요소의 곱중 큰 수를 반환한다.
 *
 * ## 시간 복잡도: O(n log n), 공간 복잡도: O(log n)
 *
 * ## 제출 결과
 * 93/93 cases passed (38 ms)
 * Your runtime beats 38.88 % of javascript submissions
 * Your memory usage beats 54.57 % of javascript submissions (59.5 MB)
 *
 * ## 점검
 * 제출 결과를 보니 최적화가 필요해 보여서 다른 방식으로 풀어본다.
 *
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
  nums.sort((a, b) => a - b);
  const length = nums.length

  const mul1 = nums[0] * nums[1] * nums[length-1];
  const mul2 = nums[length-1] * nums[length-2] * nums[length-3];

  return Math.max(mul1, mul2);
};
// @lc code=end

console.log(maximumProduct([-1, -2, -3]));
console.log(maximumProduct([1, 2, 3]));

/**
 * 다른 방식의 풀이
 *
 * ## 풀이 과정
 * 1. 가장 큰 수 3개와 가장 작은 2개를 찾아서 변수에 저장한다.
 * 2. 가장 큰 수 1개와 가장 작은 수 2개를 곱한 값과
 *    가장 큰 수 3개를 곱한 값 중 더 큰 수를 반환한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 93/93 cases passed (13 ms)
 * Your runtime beats 77.75 % of javascript submissions
 * Your memory usage beats 34.19 % of javascript submissions (60.4 MB)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct2 = (nums) => {
  const maxList = Array(3).fill(Number.MIN_SAFE_INTEGER);
  const minList = Array(2).fill(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (maxList[0] < num) {
      [maxList[2], maxList[1], maxList[0]] = [maxList[1], maxList[0], num];
    } else if (maxList[1] < num) {
      [maxList[2], maxList[1]] = [maxList[1], num];
    } else if (maxList[2] < num) {
      maxList[2] = num;
    }
    
    if (minList[0] > num) {
      [minList[1], minList[0]] = [minList[0], num];
    } else if (minList[1] > num) {
      minList[1] = num;
    }
  }

  const mul1 = minList[0] * minList[1] * maxList[0];
  const mul2 = maxList[0] * maxList[1] * maxList[2];

  return Math.max(mul1, mul2);
};
