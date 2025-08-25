/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 * Tags: array | divide-and-conquer | dynamic-programming
 */

// @lc code=start
/**
 * ## 문제
 * 정수 배열 nums가 주어졌을 때, 가장 큰 합을 가진 부분 배열을 찾아서 그 합을 반환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 출력: 6
 * 설명: 부분 배열 [4,-1,2,1]이 가장 큰 합 6을 가집니다.
 *
 * 예시 2:
 * 입력: nums = [1]
 * 출력: 1
 * 설명: 부분 배열 [1]이 가장 큰 합 1을 가집니다.
 *
 * 예시 3:
 * 입력: nums = [5,4,-1,7,8]
 * 출력: 23
 * 설명: 부분 배열 [5,4,-1,7,8]이 가장 큰 합 23을 가집니다.
 *
 * ## 제약 조건
 * 1.  1 <= nums.length <= 10⁵ (배열 길이는 1 이상 10만 이하)
 * 2. -10⁴ <= nums[i] <= 10⁴ (각 원소는 -1만 이상 1만 이하)
 *
 * ## 추가 도전
 * O(n) 해법을 구현했다면, 더 미묘한 분할 정복 접근법으로도 다른 해법을 구현해보세요.
 *
 * ## 문제 요약
 * 연속된 부분 배열 중에서 최대 합을 찾아서 반환한다.
 * 이 문제는 유명한 "카데인 알고리즘(Kadane's Algorithm)" 문제라고 한다.
 *
 * ## 풀이 과정
 * 제한 시간 15분을 초과하여 Claude Sonnet 4의 풀이를 확인하였다.
 * 카데인 알고리즘 접근법 (O(n))
 *  - 현재까지의 최대 합(currentSum)과 전체 최대 합(maxSum)을 추적
 *  - 각 원소에서 "현재 합에 더할지" vs "새로 시작할지" 결정
 *  - currentSum이 음수가 되면 새로 시작하는 것이 유리
 *
 * ## 풀이 요약
 * 카데인 알고리즘이 가장 효율적이며, 핵심은 현재 위치에서
 * "이전까지의 합을 포함할지 새로 시작할지"를 결정하는 것이다.
 *
 * ## 실행 순서 디버깅
 * 1. i=1: currentSum = max(1, -2+1) = 1
 * 2. i=2: currentSum = max(-3, 1-3) = -2 → 새로 시작
 * 3. i=3: currentSum = max(4, -2+4) = 4 → 새로 시작
 * 4. i=4: currentSum = max(-1, 4-1) = 3
 * 5. i=5: currentSum = max(2, 3+2) = 5
 * 6. i=6: currentSum = max(1, 5+1) = 6 ← 최대값 갱신
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 210/210 cases passed (1 ms)
 * Your runtime beats 90.46 % of javascript submissions
 * Your memory usage beats 73.37 % of javascript submissions (63.4 MB)
 *
 * ## 점검
 * sum과 maxSum을 가지고 접근은 하였지만, 패턴 분석에 실패해서 조건을 제대로 작성하지
 * 못한 것이 원인이라고 생각한다. 답을 보니 조건 하나의 차이로 실패했다는 사실이 허무했다.
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if (nums.length < 2) return nums[0];

  let sum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    sum = Math.max(num, sum + num);
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};
// @lc code=end

/**
 * ## 추가 도전
 * Claude Sonnet 4의 추가 도전, 분할 정복 접근법의 풀이
 * 처리 속도는 카제인 알고리즘보다 떨어진다.
 *
 * ## 풀이 요약
 * - 배열을 중간점으로 나누어 재귀적으로 처리
 * - 왼쪽 부분, 오른쪽 부분, 중간을 가로지르는 부분의 최대값 비교
 *
 * ## 시간 복잡도: O(n log n), 공간 복잡도: O(log n)
 *
 * ## 제출 결과
 * 210/210 cases passed (25 ms)
 * Your runtime beats 5.08 % of javascript submissions
 * Your memory usage beats 33.01 % of javascript submissions (63.9 MB)
 */
const maxSubArrayDivideConquer = (nums) => {
  if (nums.length === 0) return 0;
  
  const divideConquer = (arr, left, right) => {
    // 기저 조건: 원소가 하나일 때
    if (left === right) return arr[left];
    
    const mid = Math.floor((left + right) / 2);
    
    // 왼쪽 부분의 최대 부분 배열 합
    const leftMax = divideConquer(arr, left, mid);
    
    // 오른쪽 부분의 최대 부분 배열 합
    const rightMax = divideConquer(arr, mid + 1, right);
    
    // 중간을 가로지르는 최대 부분 배열 합
    let leftSum = arr[mid];
    let sum = arr[mid];
    for (let i = mid - 1; i >= left; i--) {
      sum += arr[i];
      leftSum = Math.max(leftSum, sum);
    }
    
    let rightSum = arr[mid + 1];
    sum = arr[mid + 1];
    for (let i = mid + 2; i <= right; i++) {
      sum += arr[i];
      rightSum = Math.max(rightSum, sum);
    }
    
    const crossSum = leftSum + rightSum;
    
    // 세 가지 경우 중 최대값 반환
    return Math.max(leftMax, rightMax, crossSum);
  };
  
  return divideConquer(nums, 0, nums.length - 1);
};