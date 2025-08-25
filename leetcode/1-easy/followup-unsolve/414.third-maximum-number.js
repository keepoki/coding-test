/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * 정수 배열 nums가 주어졌을 때, 이 배열에서 세 번째로 큰 서로 다른 값을 반환하세요.
 * 만약 세 번째로 큰 값이 존재하지 않는다면, 가장 큰 값을 반환하세요.
 *
 * ## 예시
 * 예제 1
 * 입력: nums = [3,2,1]
 * 출력: 1
 * 설명:
 * - 첫 번째로 큰 값은 3
 * - 두 번째로 큰 값은 2
 * - 세 번째로 큰 값은 1
 *
 * 예제 2
 * 입력: nums = [1,2]
 * 출력: 2
 * 설명:
 * - 첫 번째로 큰 값은 2
 * - 두 번째로 큰 값은 1
 * - 세 번째로 큰 값은 존재하지 않으므로, 가장 큰 값인 2를 반환
 *
 * 예제 3
 * 입력: nums = [2,2,3,1]
 * 출력: 1
 * 설명:
 * - 첫 번째로 큰 값은 3
 * - 두 번째로 큰 값은 2 (중복된 2는 하나로 취급)
 * - 세 번째로 큰 값은 1
 *
 * ## 제약 조건
 * 1. 1 <= nums.length <= 10^4
 * 2. -2^31 <= nums[i] <= 2^31 - 1
 *
 * ## 추가 도전
 * O(n) 시간 복잡도로 해결할 수 있을까요?
 *
 * ## 풀이 과정
 * 1. set으로 nums 배열의 중복을 제거
 * 2. set을 다시 배열로 변환 시키고 내림차순으로 정렬
 * 3. 배열의 길이가 3 이상인가?
 *    - 3 이상이면 세 번째 큰 숫자를 반환
 *    - 그보다 작으면 제일 큰 숫자를 반환
 *
 * ## 풀이 요약
 * 중복 제거(Set) 후 배열 변환 후 내림차순 정렬한다.
 * 길이에 따라 세 번째 큰 수 또는 최댓값 반환한다.
 *
 * ## 시간 복잡도: O(n log n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 34/34 cases passed (2 ms)
 * Your runtime beats 76.63 % of javascript submissions
 * Your memory usage beats 12.2 % of javascript submissions (57.9 MB)
 *
 * ## 점검
 * 추가 도전 조건에 만족되지 않지만 5분 이내에 쉽게 풀 수 있는 문제였다.
 *
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  const set = new Set(nums);
  const descNums = [...set].sort((a, b) => b - a);

  if (descNums.length > 2) {
    return descNums[2];
  } else {
    return descNums[0];
  }
};
// @lc code=end

/**
 * ## 추가 도전
 * O(n) 시간 복잡도로 해결할 수 있을까요?
 *
 * ## 점검
 * 15분 시간이 끝날 때까지 풀지 못하였다. 뭔가 조금만 더 하면 될 것 같은 기분이
 * 느껴졌었는데 아쉬움이 남는다. 나중에 다시 풀도록..
 *
 * @param {number[]} nums
 * @return {number}
 */
const thirdMaxFollowUpFailed = (nums) => {
  if (nums.length < 3) {
    return nums[0] < nums[1] ? nums[1] : nums[0];
  }

  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (first === num || second === num || third === num) continue;

    if (first < num) {
      if (third < second) {
        third = second;
      } else if (second < first) {
        second = first;
      }

      first = num;
    } else if (second < num) {
      if (third < second) {
        third = second;
      }

      second = num;
    } else if (third < num) {
      third = num;
    }
  }

  if (third === Number.MIN_SAFE_INTEGER) {
    return first;
  }

  return third;
};

console.log(thirdMaxFollowUpFailed([2, 2, 3, 1]));
console.log(thirdMaxFollowUpFailed([1, 1, 2]));


/**
 * GPT-5의 풀이
 *
 * ## 추가 도전
 * O(n) 시간 복잡도로 해결할 수 있을까요?
 *
 * ## 풀이 과정
 * 1. 세 개의 변수(first, second, third)를 -Infinity로 초기화.
 * 2. nums를 순회하면서 중복은 건너뛰고, 현재 숫자를 세 변수와 비교하여 업데이트.
 *    - num > first: 세 변수를 한 칸씩 밀고 first = num.
 *    - first > num > second: second = num.
 *    - second > num > third: third = num.
 * 3. 순회가 끝난 뒤 third가 여전히 -Infinity라면 세 번째 값이 없다는 의미 → first 반환.
 * 4. 그렇지 않다면 third 반환.
 *
 * ## 풀이 요약
 * 세 개의 최대값(first, second, third)을 추적하며 중복을 건너뛰고 갱신한 뒤,
 * third가 존재하면 third를 아니면 first를 반환
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 34/34 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 93.94 % of javascript submissions (54 MB)
 *
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax2 = (nums) => {
  let first = -Infinity, second = -Infinity, third = -Infinity;

  for (let num of nums) {
    // 이미 기록된 최대값들과 같은 값은 무시
    if (num === first || num === second || num === third) continue;

    if (num > first) {
      [first, second, third] = [num, first, second];
    } else if (num > second) {
      [second, third] = [num, second];
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? first : third;
};
