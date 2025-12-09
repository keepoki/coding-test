/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * ## 문제
 * 정수 배열 nums (길이 n)과 정수 k가 주어집니다.
 * 길이가 정확히 k인 연속된 부분 배열 중 평균값이 최대가 되는 부분 배열을 찾아,
 * 그 최대 평균값을 반환하세요. 오차가 10^-5 이하인 답은 정답으로 인정됩니다.
 *
 * ## 예시
 * 예제 1
 * 입력: nums = [1,12,-5,-6,50,3], k = 4
 * 출력: 12.75000
 * 설명: 최대 평균은 (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 *
 * 예제 2
 * 입력: nums = [5], k = 1
 * 출력: 5.00000
 *
 * ## 제약 조건
 * 1. n == nums.length
 * 2. 1 <= k <= n <= 10^5
 * 3. -10^4 <= nums[i] <= 10^4
 *
 * ## 풀이 과정
 * 1. 최대 값을 제일 작은 숫자로 초기화
 * 2. 배열을 순회하면서 i부터 i + k 까지의 숫자를 더하고 k로 나눈 값과 최대 평균 값을 비교
 * 3. 최대 평균 값을 반환한다.
 *
 * ## 풀이 요약
 * i부터 i + k 까지의 숫자를 더하고 k로 나눈 값과 최대 평균 값을값을 비교하고 반환한다.
 *
 * ## 시간 복잡도: , 공간 복잡도:
 *
 * ## 제출 결과
 * 127/127 cases passed (2653 ms)
 * Your runtime beats 5.02 % of javascript submissions
 * Your memory usage beats 92.95 % of javascript submissions (67.1 MB)
 *
 * ## 점검
 * 처리 속도가 말도 안되게 느려서 계산을 줄이는 방법을 생각하다가 캐싱 방식으로
 * 생각하였다. k만큼의 숫자를 더한 뒤 이전의 첫 번째 요소의 값만 빼버리면
 * 3개 숫자의 합은 유지되므로 불필요한 연산을 줄일 수 있다.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let maxAverage = -Infinity;
  let sum = 0;

  for (let i = 0; i <= nums.length - k; i++) {
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }

    maxAverage = Math.max(maxAverage, sum / k);
  }

  return maxAverage;
};
// @lc code=end

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([0, 1, 1, 3, 3], 4));

/**
 * 캐싱 방식으로 계산을 최적화한 방법
 *
 * ## 풀이 과정
 * 1. 최대 평균 값 maxAverage, 합을 담을 변수 sum 초기화
 * 2. k 개수만큼의 숫자를 더한다.
 * 3. 최대 평균 값에 대입한다. sum / k
 * 4. k부터 n까지 순회하면서 이전 계산의 첫 번째 요소를 sum에서 빼준다.
 * 5. 현재 값을 sum에 더해준다.
 * 6. sum / k와 maxAverage를 비교하여 큰 값을 maxAverage에 넣는다.
 * 7. maxAverage를 반환한다.
 *
 * ## 제출 결과
 * 127/127 cases passed (1 ms)
 * Your runtime beats 99.05 % of javascript submissions
 * Your memory usage beats 65.34 % of javascript submissions (68 MB)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage2 = (nums, k) => {
  let maxAverage = 0;
  let sum = 0;

  // k 개수만큼의 숫자를 더해준다.
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  maxAverage = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k]; // 이전 게산에서 첫 번째 요소 값을 빼준다.
    sum += nums[i];

    maxAverage = Math.max(maxAverage, sum / k);
  }

  return maxAverage;
}

/**
 * GPT-4의 풀이, 슬라이딩 윈도우 방식
 *
 * 내 풀이와 거의 흡사하지만 다른 점은, 나누는 것은 마지막에 한 번만 한다는 점이다.
 * 아차 싶었다! 수가 많고 커질수록 연산 속도에서 큰 차이가 있을 것이다.
 * 캐싱이니 뭐니 했는데, 결국 알고리즘의 정식 명칭은 슬라이딩 윈도우였다.
 *
 * ## 풀이 과정
 * 슬라이딩 윈도우
 * 1. 처음 k개의 합을 구합니다.
 * 2. 그 후 인덱스 k부터 끝까지 한 칸씩 윈도우를 옮기면서,
 *    - 앞의 값을 빼고
 *    - 새로 들어온 값을 더합니다.
 * 3. 그 과정에서 가장 큰 합을 기록해두고, 마지막에 maxSum / k를 반환합니다.
 *
 * ## 제출 결과
 * 127/127 cases passed (1 ms)
 * Your runtime beats 99.05 % of javascript submissions
 * Your memory usage beats 71.69 % of javascript submissions (67.8 MB)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage3 = (nums, k) => {
  let windowSum = 0;
  // 처음 k개 합
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  // 슬라이딩 윈도우
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}