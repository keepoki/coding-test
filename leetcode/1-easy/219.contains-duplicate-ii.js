/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 * Tag: array | hash-table
 */

// @lc code=start
/**
 * ## 문제
 * 정수 배열 nums와 정수 k가 주어졌을 때, 배열 내에 서로 다른 인덱스 i와 j가 존재하여
 * nums[i] == nums[j]이고 abs(i - j) <= k를 만족하면 true를 반환하고,
 * 그렇지 않으면 false를 반환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [1, 2, 3, 1], k = 3
 * 출력: true
 *
 * 예시 2:
 * 입력: nums = [1, 0, 1, 1], k = 1
 * 출력: true
 *
 * 예시 3:
 * 입력: nums = [1, 2, 3, 1, 2, 3], k = 2
 * 출력: false
 *
 * ## 제약 조건
 * 1. 1 <= nums.length <= 105
 * 2. -109 <= nums[i] <= 109
 * 3. 0 <= k <= 105
 *
 * ## 문제 요약
 * 배열의 같은 값을 가진 요소들의 인덱스의 길이 차이가 하나라도 k보다 이하이면 true,
 * 모두 만족하지 못하면 false를 반환해야 한다.
 *
 * ## 풀이 과정
 * 해시맵 이용 (key: num, value: index)
 * 1. 배열을 순회하며 해시맵에 현재 숫자의 키값이 존재하는지 확인한다.
 *    - 있다면, 해시맵의 value(index)를 현재 index와 계산하여 k 이하라면 true를 반환
 *      하고, 조건이 맞지 않다면 현재 값(index)으로 덮어씌운다.
 *    - 없다면, 해시맵에 현재 값을 저장한다.
 * 2. 배열의 순회가 끝날 때 까지 반환되지 않았다면 최종적으로 false를 반환한다.
 *
 * ## 풀이 요약
 * 배열을 순회하며 해시맵에 현재 숫자가 존재하는지 확인하고 k와 비교하여 결과를 반환한다.
 * 배열의 순회가 끝날 때까지 반환되지 않았다면 false를 반환한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 65/65 cases passed (52 ms)
 * Your runtime beats 28.5 % of javascript submissions
 * Your memory usage beats 52.64 % of javascript submissions (79.2 MB)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] != null) {
      const j = map[num];

      if (Math.abs(i - j) <= k) {
        return true;
      } else {
        map[num] = i;
      }
    } else {
      map[num] = i;
    }
  }

  return false;
};
// @lc code=end

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

/**
 * 두 번째 방법, Set
 * Gemini 2.5 Flash의 풀이, Set과 슬라이딩 윈도우
 *
 * 슬라이딩 윈도우(Sliding Window)
 * 이 문제의 핵심은 인덱스 차이(k)라는 '거리'입니다. k라는 크기의 윈도우(창)를 배열 위에서
 * 이동시키면서, 그 윈도우 안에 중복된 값이 있는지 확인하는 방식으로 접근할 수 있습니다.
 *
 * ## 풀이 과정
 * 1. 초기화: windowSet이라는 빈 Set을 만듭니다. 이 Set이 k 크기의 윈도우 역할을 할 것입니다.
 *
 * 2. 배열 순회: nums 배열을 처음부터 끝까지 i 인덱스를 사용하여 순회합니다.
 *
 * 3. 중복 확인: 각 순회마다 현재 요소인 nums[i]가 windowSet에 이미 존재하는지 확인합니다.
 * windowSet.has(nums[i])가 true라면, k 거리 이내에 같은 값이 이미 존재한다는 뜻이므로
 * 문제의 조건을 만족합니다. 이 경우, 즉시 true를 반환하고 함수를 종료합니다.
 *
 * 4. 윈도우 업데이트: 중복이 없다면, 현재 요소를 윈도우에 추가합니다.
 * windowSet.add(nums[i])를 사용하여 현재 요소를 Set에 넣습니다.
 *
 * 5. 윈도우 크기 유지: windowSet의 크기가 k를 초과하는지 확인합니다.
 * windowSet.size > k라면, 윈도우가 한 칸 오른쪽으로 이동했으므로, 윈도우의 가장 왼쪽
 * 끝에 있던 요소(nums[i - k])를 Set에서 제거해야 합니다.
 * windowSet.delete(nums[i - k])를 호출하여 윈도우 크기를 k 이하로 유지합니다.
 *
 * 6. 결과 반환: 배열 전체를 순회했는데도 중복을 찾지 못했다면, 문제의 조건을 만족하는 경우가 없다는 뜻이므로 false를 반환합니다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(min(n,k))
 *
 * ## 제출 결과
 * 65/65 cases passed (25 ms)
 * Your runtime beats 74.11 % of javascript submissions
 * Your memory usage beats 80.87 % of javascript submissions (70.8 MB)
 */
const containsNearbyDuplicate2 = (nums, k) => {
  const windowSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    // 윈도우 안에 현재 숫자가 이미 존재하는지 확인
    if (windowSet.has(nums[i])) {
      return true;
    }

    // 윈도우에 현재 숫자 추가
    windowSet.add(nums[i]);

    // 윈도우 크기가 k를 초과하면, 가장 오래된 요소 제거
    if (windowSet.size > k) {
      windowSet.delete(nums[i - k]);
    }
  }

  return false;
};


/**
 * 세 번째 방법, 해시 맵
 * 다른 사람의 풀이 (Pratik)
 */
const containsNearbyDuplicate3 = (nums, k) => {
  const hashmap = new Map();
  for (let idx = 0; idx < nums.length; idx++) {
    // 중복 값의 차이가 k보다 적든지 확인합니다.
    if (idx - hashmap.get(nums[idx]) <= k) {
      return true;
    }
    hashmap.set(nums[idx], idx);
  }
  return false;
}