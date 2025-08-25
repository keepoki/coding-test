/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 * Tags: array | hash-table
 */

// @lc code=start
/**
 * ## 문제
 * 정수 배열 nums가 주어졌을 때, 배열 내에 같은 값이 두 번 이상 나타나면 true를 반환하고,
 * 모든 요소가 고유하면 false를 반환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [1, 2, 3, 1]
 * 출력: true
 * 설명: 숫자 1이 두 번 나타납니다.
 *
 * 예시 2:
 * 입력: nums = [1, 2, 3, 4]
 * 출력: false
 * 설명: 모든 요소가 고유합니다.
 *
 * 예시 3:
 * 입력: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
 * 출력: true
 *
 * ## 제약 조건
 * 1. 1 <= nums.length <= 105
 * 2. -109 <= nums[i] <= 109
 *
 * ## 문제 요약
 * 배열 내에 같은 값이 두 번 이상 나타나면 true, 아니면 false를 반환해야 한다.
 *
 * ## 풀이 과정
 * 1. set에 배열 데이터를 입력하고 set과 배열의 데이터 길이를 비교하여 반환한다.
 *
 * ## 풀이 요약
 * set에 배열 값을 입력하고, 배열과 데이터 길이를 비교한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 77/77 cases passed (17 ms)
 * Your runtime beats 70.76 % of javascript submissions
 * Your memory usage beats 59.3 % of javascript submissions (73.8 MB)
 *
 * ## 점검
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  return new Set(nums).size !== nums.length;
};
// @lc code=end

/**
 * 두 번째 방법, 해시 맵
 *
 * ## 풀이 과정
 * 1. 배열을 순회하면서 해시 맵에 현재 숫자 값이 존재하는지 확인한다.
 *    - 없으면, 해시 맵에 해당 숫자를 키로 설정하고 값은 아무 값이나 넣는다.
 *    - 있으면, true를 반환한다.
 * 2. 배열의 순회가 끝났는데도 반환 값이 없으면 false를 반환한다.
 *
 * ## 풀이 요약
 * 해시 맵에 숫자들을 저장하여 해시 맵에 값이 존재하는지 여부를 판단한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 77/77 cases passed (32 ms)
 * Your runtime beats 29.41 % of javascript submissions
 * Your memory usage beats 15.81 % of javascript submissions (77.6 MB)
 */
const containsDuplicate2 = (nums) => {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map[num]) {
      map[num] = true;
    } else {
      return true;
    }
  }

  return false;
}

/**
 * 세 번째 풀이 방법, 배열 정렬
 * Gemini 2.5 Flash의 풀이
 *
 * ## 풀이 과정
 * 배열을 정렬한 후, 인접한 요소들이 같은지 비교하는 방법입니다.
 * 정렬을 하게 되면 같은 값들이 나란히 위치하게 됩니다.
 *
 * ## 시간 복잡도: O(n log n), 공간 복잡도: O(log n)
 *
 * ## 제출 결과
 * 77/77 cases passed (76 ms)
 * Your runtime beats 9.51 % of javascript submissions
 * Your memory usage beats 92.11 % of javascript submissions (67 MB)
 */
const containsDuplicate3 = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};


/**
 * 네 번째 풀이 방법, 셋
 * Gemini 2.5 Flash의 풀이, 성능 최적화된 풀이
 *
 * ## 풀이 과정
 * 이 방법은 배열을 순회하면서 각 요소를 Set에 추가하는 동시에, 해당 요소가
 * 이미 Set에 존재하는지 확인합니다. 이 방식은 중복 여부를 O(1)의 평균 시간
 * 복잡도로 검사할 수 있기 때문에 매우 효율적입니다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 77/77 cases passed (15 ms)
 * Your runtime beats 82.42 % of javascript submissions
 * Your memory usage beats 37.86 % of javascript submissions (74.5 MB)
 *
 * ## 점검
 * 찻 반쩨 플이와 다른점은, 해시 맵을 사용했던 방식처럼 배열을 모두 순회하지
 * 않아도 조건이 성립되면 반환한다. 그래서 더 효율적이다.
 */
const containsDuplicate4 = (nums) => {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true; // 이미 존재하는 경우, 즉시 true 반환
    }
    seen.add(num);
  }
  return false; // 모든 요소를 순회했으나 중복이 없는 경우
};