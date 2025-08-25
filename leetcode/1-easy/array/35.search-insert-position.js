/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 * Tags: array | binary-search
 */

// @lc code=start
/**
 * ## 문제
 * 주어진 정렬된(sorted), 고유한(distinct) 정수 배열과 타겟(target) 값이 있을 때,
 * 타겟 값이 배열에서 찾아지면 해당 인덱스를 반환하세요.
 * 타겟 값이 찾아지지 않으면, 정렬된 상태로 삽입될 경우의 인덱스를 반환하세요.
 * 이때, 반드시 O(log n) 시간 복잡도로 알고리즘을 작성해야 합니다.
 *
 * 예시 1:
 * 입력: nums = [1,3,5,6], target = 5
 * 출력: 2
 *
 * 예시 2:
 * 입력: nums = [1,3,5,6], target = 2
 * 출력: 1
 *
 * 예시 3:
 * 입력: nums = [1,3,5,6], target = 7
 * 출력: 4
 *
 * ## 제약 조건
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums는 오름차순으로 정렬된 고유한(중복되지 않는) 값들을 포함합니다.
 * -104 <= target <= 104
 *
 * ## 문제 요약
 * 오름차순으로 정렬된 고유한 값들의 정수 배열과 목표값이 주어진다.
 * 목표 값이 배열에 있으면 해당하는 인덱스를 반환한다.
 * 없으면, 정렬된 상태로 삽입될 경우의 인덱스를 반환한다.
 *
 * ## 풀이 과정
 * 1. 배열을 탐색하면서 target과 일치하는지 확인하고 같거나 크다면 해당 인덱스를 반환한다.
 * 2. 탐색이 끝났을 때까지 반환되지 않았다면, 큰 값이 없으므로 배열의 길이를 반환한다.
 *
 * ## 풀이 요약
 * 배열을 순회하며 target 값과 같거나 큰 첫 번째 요소의 인덱스를 반환하고, 찾지 못하면
 * 배열의 길이를 반환한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 66/66 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 28.18 % of javascript submissions (54.2 MB)
 *
 * 시간 복잡도는 최악의 경우 O(n)이다. 요구 사항은 O(log n)이었기 때문에
 * 답은 통과가 됐지만, 요구 사항을 만족하지 못하였다.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  for (let i = 0; i< nums.length; i++) {
    const num = nums[i];
    if (num === target || num > target) {
      return i;
    }
  }

  return nums.length;
};
// @lc code=end

// console.log(searchInsert([1, 3, 5, 6], 2)); // 1
// console.log(searchInsert([1, 3, 5, 6], 0)); // 0
// console.log(searchInsert([1, 3, 5, 6], 5)); // 2
// console.log(searchInsert([1, 3, 5, 6], 7)); // 4


/**
 * 시간 복잡도 O(log n)이 될 수 있도록 다시 도전한다.
 * Tag 이진 탐색에 힌트를 얻는다.
 * 이진 탐색은 탐색 범위를 절반씩 줄여가면서 원하는 값을 찾는 방식이다.
 * 이진 탐색은 정렬된 데이터에서 매우 효율적이다.
 *
 * ## 풀이 과정
 * 이진 탐색의 핵심은 중간값을 구하는 것이다.
 * 1. low, high 투 포인터 방식으로 mid를 구하고 mid 요소의 값을 기준으로 비교한다.
 * 2. mid 요소의 값이 target보다 크면 high의 인덱스를 mid - 1로 바꾸고
 *   target보다 작으면 low의 인덱스를 mid + 1로 바꾸고 다시 탐색한다.
 * 3. 탐색이 끝날 때까지 반환된 값이 없으면, 배열의 길이를 반환한다.
 *
 * ## 실행 순서 디버깅
 * [1, 3, 5, 6], target = 2
 * +-----+-----+------+------+---------+-----------+----------------------+
 * | 단계 | low | high | mid  | midNum  | 조건              | low/high 변화 |
 * +-----+-----+------+------+---------+-----------+----------------------+
 * | 1   | 0   | 3    | 1    | 3       | midNum < target   | low = 2      |
 * | 2   | 2   | 3    | 2    | 5       | midNum === target | return 2     |
 * +-----+-----+------+------+---------+-----------+----------------------+
 *
 * ## 풀이 요약
 * 이진 탐색을 사용하여 target의 인덱스를 찾거나, 삽입될 위치를 결정한다.
 *
 * ## 시간 복잡도: O(log n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 66/66 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 56.29 % of javascript submissions (53.7 MB)
 */
const searchInsert2 = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  // 중간 인덱스를 내림차순으로 구하므로 홀수의 경우를 감안해서
  // low <= high(같거나 큰) 조건으로 해야한다.
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const midNum = nums[mid];

    if (midNum === target) {
      return mid;
    } else if (midNum > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

console.log(searchInsert2([1, 3, 5, 6], 2)); // 1
console.log(searchInsert2([1, 3, 5, 6], 0)); // 0
console.log(searchInsert2([1, 3, 5, 6], 5)); // 2
console.log(searchInsert2([1, 3, 5, 6], 7)); // 4