/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * 이진 배열 nums가 주어졌을 때, 배열에서 연속된 1의 최대 개수를 반환하시오.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [1,1,0,1,1,1]
 * 출력: 3
 * 설명: 처음 두 개의 1 또는 마지막 세 개의 1이 연속되어 있다.
 * 연속된 1의 최대 개수는 3이다.
 *
 * 예시 2:
 * 입력: nums = [1,0,1,1,0,1]
 * 출력: 2
 *
 * ## 제약 조건
 * 1. 1 <= nums.length <= 10^5
 * 2. nums[i]는 0 또는 1이다.
 *
 * ## 풀이 과정
 * 1. 1의 연속된 개수를 기록하기 위한 변수 선언. maxCount, count
 * 2. nums의 길이만큼 순회하면서 현재 숫자를 확인한다.
 *    - 1이면 카운트 증가. count++
 *    - 0이면 카운트 초기화 및 최대 카운트 갱신. count = 0, maxCount update
 * 3. 순회가 끝난 뒤 maxCount와 count 중 큰 수를 반환한다.
 *
 * ## 풀이 요약
 * 배열을 한 번 순회하며 연속된 1의 개수를 세고, 0을 만나면 카운트를 초기화하면서
 * 최대값을 갱신하여 최종 최대 연속 1의 개수를 반환한다.
 *
 * ## 실행 순서 디버깅
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 45/45 cases passed (1 ms)
 * Your runtime beats 90.6 % of javascript submissions
 * Your memory usage beats 23.88 % of javascript submissions (60.7 MB)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num == 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }

  return Math.max(count, maxCount);
};
// @lc code=end

/**
 * GPT-5의 풀이, 투 포인터 방식
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 45/45 cases passed (1 ms)
 * Your runtime beats 90.6 % of javascript submissions
 * Your memory usage beats 76.25 % of javascript submissions (59.3 MB)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes2 = (nums) => {
  let left = 0, right = 0;
  let maxCount = 0;

  while (right < nums.length) {
    if (nums[right] === 1) {
      right++;
      maxCount = Math.max(maxCount, right - left);
    } else {
      right++;
      left = right; // 0을 만나면 시작점 갱신
    }
  }

  return maxCount;
};

/**
 * GPT-5의 풀이, 함수형 프로그래밍 스타일
 *
 * 확실히 for 반복문보다 느리다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 45/45 cases passed (6 ms)
 * Your runtime beats 6.77 % of javascript submissions
 * Your memory usage beats 5.2 % of javascript submissions (62.4 MB)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes3 = (nums) => {
  return nums.reduce(
    ([count, maxCount], num) => {
      if (num === 1) {
        count += 1;
        maxCount = Math.max(maxCount, count);
      } else {
        count = 0;
      }
      return [count, maxCount];
    },
    [0, 0] // 초기값: [현재 연속된 1의 개수, 최대값]
  )[1]; // 최종적으로 maxCount 반환
};
