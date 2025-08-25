/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 * Tags: array | two-pointers
 */

// @lc code=start
/**
 * ## 문제
 * 주어진 정수 배열 nums에서 모든 0을 배열의 끝으로 이동시키세요. 이때, 0이 아닌 요소들의
 * 상대적인 순서는 유지해야 합니다.
 *
 * 참고: 배열의 복사본을 만들지 않고, 반드시 제자리(in-place)에서 작업을 완료해야 합니다.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [0, 1, 0, 3, 12]
 * 출력: [1, 3, 12, 0, 0]
 *
 * 예시 2:
 * 입력: nums = [0]
 * 출력: [0]
 *
 * ## 제약 조건
 * 1. 1 <= nums.length <= 104
 * 2. -231 <= nums[i] <= 231 - 1
 *
 * ## 추가 도전
 * 총 연산 횟수를 최소화할 수 있을까요?
 *
 * ## 문제 요약
 * 0이 아닌 숫자는 순서를 유지한 상태로 0인 숫자들을 배열의 뒤로 보내야 한다.
 * 기존 배열을 직접 변경시켜야 한다.
 *
 * ## 풀이 과정
 * 투 포인터 방식
 * 1. zeroIdx = 0, noneZeroIdx = 1 으로 초기화한다.
 * 2. zeroIdx는 요소의 값이 0을 만날 때 까지 탐색한다.
 * 3. noneZeroIdx 요소의 값이 0이 아니면 zeroIdx의 요소값과 교환한다.
 * 4. noneZeroIdx를 다음 요소로 한 칸 옮긴다.
 * 5. 2 ~ 4번 과정을 반복한다.
 *
 * ## 풀이 요약
 * 투 포인터로 배열을 순회하면서 0인 요쇼를 찾고 0이 아닌 요소와 교환한다.
 *
 * ## 실행 순서 디버깅
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 75/75 cases passed (2 ms)
 * Your runtime beats 53.73 % of javascript submissions
 * Your memory usage beats 24.75 % of javascript submissions (60.8 MB)
 *
 * ## 점검
 * 제한 시간 15분을 초과했지만 시간이 지나기 전에 풀 방법이 생각나서 진행했다.
 * 푸는데 총 18분 걸렸다. 아무리 생각해도 결과적으로 투 포인터만 생각났다.
 * 그리고 추가 도전 사항에 부합한다.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let zeroIdx = 0;
  let noneZeroIdx = 1;

  while (noneZeroIdx < nums.length) {
    while (nums[zeroIdx] !== 0 && zeroIdx < noneZeroIdx) zeroIdx++;

    if (nums[noneZeroIdx] !== 0) {
      // 데이터 교환 (Swap)
      [nums[zeroIdx], nums[noneZeroIdx]] = [nums[noneZeroIdx], nums[zeroIdx]];
    }

    noneZeroIdx++;
  }
};
// @lc code=end

console.log(moveZeroes([2, 1]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));

/**
 * Gemini 2.5 Flash, 투 포인터(값 덮어쓰기)
 *
 * ## 풀이 과정
 * 이 방식은 0이 아닌 값들을 배열의 앞부분으로 먼저 옮긴 후, 나머지 뒷부분을 0으로 채우는
 * 방법입니다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 75/75 cases passed (3 ms)
 * Your runtime beats 37.92 % of javascript submissions
 * Your memory usage beats 65.44 % of javascript submissions (60.1 MB)
 *
 * @param {number} nums
 * @returns {void}
 */
const moveZeroes2 = (nums) => {
  let nonZeroIndex = 0;

  // 0이 아닌 값들을 앞으로 이동시킵니다.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // nonZeroIndex부터 배열 끝까지 0으로 채웁니다.
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

/**
 * Gemini 2.5 Flash, 투 포인터(교환 방식)
 *
 * 내가 푼 방식보다 훨씬 깔끔하다.
 *
 * ## 풀이 과정
 * 이 방법은 배열을 한 번만 순회하며 0이 아닌 값과 0의 위치를 교환(swap)하여 문제를
 * 해결합니다. 이것이 가장 효율적인 솔루션입니다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 75/75 cases passed (5 ms)
 * Your runtime beats 23.74 % of javascript submissions
 * Your memory usage beats 38.08 % of javascript submissions (60.6 MB)
 *
 * @param {number} nums
 * @returns {void}
 */
const moveZeroes3 = (nums) => {
  let nonZeroIndex = 0;

  // 0이 아닌 값들을 만날 때마다 nonZeroIndex 위치의 값과 교환합니다.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // ES6 구조 분해 할당을 이용한 간편한 교환
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
};
