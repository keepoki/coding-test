/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 * Tags: array | math | bit-manipulation
 */

// @lc code=start
/**
 * ## 문제
 * nums라는 배열에는 0부터 n까지의 범위에 있는 서로 다른 n개의 숫자가 들어 있습니다.
 * 이 배열에서 빠져 있는 유일한 숫자를 찾아 반환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [3,0,1]
 * 출력: 2
 * 설명: 배열에 숫자가 3개 있으므로 n=3입니다. 따라서 모든 숫자는 [0,3] 범위에 있어야
 * 합니다. 2는 nums에 없는 숫자이므로 빠져 있는 숫자입니다.
 *
 * 예시 2:
 * 입력: nums = [0,1]
 * 출력: 2
 * 설명: 배열에 숫자가 2개 있으므로 n=2입니다. 따라서 모든 숫자는 [0,2] 범위에 있어야
 * 합니다. 2는 nums에 없는 숫자이므로 빠져 있는 숫자입니다.
 *
 * 예시 3:
 * 입력: nums = [9,6,4,2,3,5,7,0,1]
 * 출력: 8
 * 설명: 배열에 숫자가 9개 있으므로 n=9입니다. 따라서 모든 숫자는 [0,9] 범위에 있어야
 * 합니다. 8은 nums에 없는 숫자이므로 빠져 있는 숫자입니다.
 *
 * ## 제약 조건
 * 1. n == nums.length
 * 2. 1 <= n <= 104
 * 3. 0 <= nums[i] <= n
 * 4. 모든 수의 수는 독특합니다.
 *
 * ## 추가 도전
 * O(1)의 추가 공간 복잡도와 O(N)의 시간 복잡도만 사용하여 이 문제를 해결하는 방법을
 * 구현할 수 있을까요?
 *
 * ## 문제 요약
 * 배열의 길이만큼 숫자 0부터 길이까지 채워지는데, 배열에서 빠진 숫자를 찾아야 한다.
 *
 * ## 풀이 과정
 * 배열을 오름차순으로 정렬하고 순회하면서 요소의 값과 인덱스를 비교하여 다르면 해당
 * 인덱스를 반환한다.
 *
 * ## 시간 복잡도: O(n log n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 122/122 cases passed (16 ms)
 * Your runtime beats 22.84 % of javascript submissions
 * Your memory usage beats 17.87 % of javascript submissions (58 MB)
 *
 * ## 점검
 * 추가 도전을 생각하지 않고 가장 먼저 생각난 방식으로 풀었다. 제한 시간 15분 중에
 * 시간이 10분 이상 남아서 추가 도전을 진행한다.
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return 0;
};
// @lc code=end

/**
 * ## 추가 도전
 * O(1)의 추가 공간 복잡도와 O(N)의 시간 복잡도만 사용하여 이 문제를 해결하는 방법을
 * 구현할 수 있을까요?
 *
 * ## 풀이 과정
 * 0부터 n까지 모두 더한 합과 nums의 요소들의 숫자를 더한 합의 차이를 비교한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 122/122 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 29 % of javascript submissions (56.8 MB)
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber2 = (nums) => {
  let total = 0; // 0부터 n까지의 합
  let sum = 0; // 요소의 합
  for (let i = 0; i <= nums.length; i++) {
    sum += nums[i] || 0;
    total += i;
  }

  return total - sum;
}

console.log(missingNumber2([9,6,4,2,3,5,7,0,1]));

/**
 * Gemini 2.5 Flash의 풀이, 가우스 공식
 *
 * ## 풀이 과정
 * 가우스 공식을 이용한 풀이
 *
 * 0부터 n까지의 모든 정수의 합에서, 주어진 배열 nums의 모든 숫자의 합을 빼면 빠진 숫자를
 * 구할 수 있습니다. 0부터 n까지의 합은 가우스 공식인 n(n+1)/2를 사용해 $O(1)$의 시간에
 * 계산할 수 있습니다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 122/122 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 99.82 % of javascript submissions (53 MB)
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber3 = (nums) => {
  const n = nums.length;
  // 0부터 n까지의 모든 숫자의 합 (가우스 공식)
  const expectedSum = (n * (n + 1)) / 2;
  
  // 주어진 배열 nums의 모든 숫자의 합
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
  // 예상 합계에서 실제 합계를 빼면 빠진 숫자가 나옵니다.
  return expectedSum - actualSum;
}

/**
 * Gemini 2.5 Flash의 풀이, XOR 비트 연산
 *
 * ## 풀이 과정
 * XOR 비트 연산을 이용한 풀이
 *
 * XOR 연산(oplus)은 동일한 값을 두 번 XOR하면 원래 값으로 돌아오는 성질을 가지고
 * 있습니다 (a oplus a = 0, a oplus 0 = a). 이 성질을 이용해 빠진 숫자를 찾을 수
 * 있습니다.
 *
 * 0부터 n까지의 모든 숫자와 nums 배열의 모든 숫자를 XOR 연산합니다. nums 배열에 있는
 * 숫자들은 모두 두 번씩 XOR되므로 서로 상쇄되어 0이 됩니다. 결과적으로, nums에 없는
 * 빠진 숫자만 남게 됩니다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 122/122 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 63.13 % of javascript submissions (55.2 MB)
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber4 = (nums) => {
  let missing = nums.length; // n으로 초기화
  
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  
  return missing;
}