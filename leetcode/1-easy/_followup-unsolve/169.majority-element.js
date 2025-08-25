/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 * Tag: array | divide-and-conquer | bit-manipulation
 */

// @lc code=start
/**
 * ## 문제
 * 크기가 n인 배열 nums가 주어졌을 때, 과반수 요소를 반환하세요.
 * 과반수 요소는 ⌊n / 2⌋번보다 많이 나타나는 요소입니다. 배열에 과반수 요소가 항상
 * 존재한다고 가정할 수 있습니다.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [3,2,3]
 * 출력: 3
 *
 * 예시 2:
 * 입력: nums = [2,2,1,1,1,2,2]
 * 출력: 2
 *
 * ## 제약 조건
 * 1. n == nums.length
 * 2. 1 <= n <= 5 * 10⁴
 * 3. -10⁹ <= nums[i] <= 10⁹
 *
 * ## 추가 도전
 * 이 문제를 선형 시간과 O(1)의 공간 복잡도로 해결할 수 있을까요?
 *
 * ## 문제 요약
 * 주어진 배열 nums에서 과반수 요소를 반환해야 한다.
 *
 * ## 풀이 과정
 * 1. 해시 맵을 이용해서 numbers를 순회하여 숫자 마다 빈도수를 구한다.
 * 2. 가장 큰 빈도수를 가진 숫자를 반환한다.
 *
 * ## 풀이 요약
 * 해시 맵을 이용하여 가장 큰 빈도수를 구하고 반환한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 53/53 cases passed (2 ms)
 * Your runtime beats 72.88 % of javascript submissions
 * Your memory usage beats 89.16 % of javascript submissions (55.8 MB)
 *
 * ## 점검
 * 패턴을 분석하고 해시 맵으로 빈도수를 구해야 한다는 방법이 바로 떠올라서
 * 빠르게 풀었다. 15분 제한 시간에 추가 도전까지 끝내지는 못했다.
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map[num] = (map[num] || 0) + 1;
  }

  let majority = 0;
  let maxCount = 0;
  for (const num in map) {
    const count = map[num];
    if (count > maxCount) {
      majority = num;
      maxCount = count;
    }
  }

  return parseInt(majority);
};
// @lc code=end

console.log(majorityElement([3, 2, 3]));

/**
 * ## 추가 도전
 * 이 문제를 선형 시간과 O(1)의 공간 복잡도로 해결할 수 있을까요?
 * 15분 제한시간 안에 풀지 못하였다.
 *
 * Gemini 2.5 Flesh의 풀이
 * 내가 접근한 풀이 방식과 다르지 않았는데, 이게 조건에 왜 부합하는지 분석한다.
 *
 * ## 풀이 과정
 * 보이어-무어 과반수 투표 알고리즘을 사용합니다.
 * 1. 초기화: candidate를 0으로, count를 0으로 초기화합니다.
 * 2. 배열 순회: nums 배열의 모든 요소를 하나씩 반복합니다.
 * 3. count === 0일 때:
 *    - 이 시점에서 새로운 '과반수 요소 후보'를 정해야 합니다.
 *    - 현재의 num을 candidate로 설정하고, count를 1로 다시 시작합니다.
 * 4. count !== 0일 때:
 *    - 현재 num이 candidate와 같으면: count를 1 증가시킵니다.
 *      이는 candidate의 득표율이 높아졌음을 의미합니다.
 *    - 현재 num이 candidate와 다르면: count를 1 감소시킵니다.
 *      이는 candidate의 표가 다른 후보에게 한 표 빼앗겼음을 의미합니다.
 * 5. 결과: 배열의 끝까지 순회가 끝나면, count는 0 이상일 것이고, candidate 변수에는
 *    과반수 요소가 저장되어 있습니다. 문제 조건에 따라 과반수 요소는 항상 존재하므로,
 *    candidate가 바로 정답입니다.
 *
 * ## 실행 순서 디버깅
 * nums = [2, 2, 1, 1, 1, 2, 2]
 * 초기 상태:
 * candidate = 0 (후보 없음)
 * count = 0 (득표수 0)
 *
 * 탐색 시작:
 * nums[0] = 2: count가 0이므로, candidate = 2, count = 1이 됩니다. (2가 새로운 후보)
 * nums[1] = 2: 현재 candidate와 같으므로, count++를 하여 count = 2가 됩니다. (후보 2의 지지자가 늘어남)
 * nums[2] = 1: 현재 candidate와 다르므로, count--를 하여 count = 1이 됩니다. (후보 2의 표가 1에 의해 상쇄됨)
 * nums[3] = 1: 현재 candidate와 다르므로, count--를 하여 count = 0이 됩니다. (후보 2의 표가 다시 1에 의해 상쇄되어 0이 됨)
 * nums[4] = 1: count가 0, 새로운 후보 지정. candidate = 1, count = 1이 됩니다.
 * nums[5] = 2: 현재 candidate와 다르므로, count--를 하여 count = 0이 됩니다. (후보 1의 표가 2에 의해 상쇄됨)
 * nums[6] = 2: count가 0, 새로운 후보 지정. candidate = 2, count = 1이 됩니다.
 *
 * 탐색 종료:
 * 배열의 끝까지 탐색이 끝났습니다.
 * 최종적으로 candidate는 2가 되고, count는 1이 남습니다.
 * 결과는 candidate인 2입니다.
 *
 * ## 제출 결과
 * 53/53 cases passed (1 ms)
 * Your runtime beats 91.34 % of javascript submissions
 * Your memory usage beats 97.95 % of javascript submissions (55 MB)
 *
 * ## 점검
 * 나는 이전값과 같으면 카운트하고, 다르면 교체하고, 가장 카운트가 높았던 숫자를 기록하고
 * 반환하는 방식으로 생각했는데, 이런 식으로는 연속된 같은 숫자 중 가장 카운트가 큰 숫자를
 * 반환하므로 전체로 보면 맞지 않다.
 *
 * 핵심은 보이어-무어 과반수 투표 알고리즘인데 선거처럼 후보와 득표수를 관리하는 것이다.
 * 배열을 한 번만 순회하면서
 * - 현재 숫자가 후보와 같으면 득표수를 늘리고, 다르면 득표수를 줄인다.
 * - 득표수가 0이 되면 새로운 숫자를 후보로 교체한다.
 *
 * 과반수 요소는 항상 절반 이상을 차지하기 때문에, 다른 요소들에 의해 득표수가 줄어들어도
 * 최종적으로 득표수가 0이 되지 않고 마지막까지 살아남게 된다.
 */
const majorityElement2 = (nums) => {
  let candidate = 0;
  let count = 0;

  for (const num of nums) {
    // 횟수가 0이면 현재 숫자를 새로운 후보로 지정
    if (count === 0) {
      candidate = num;
      count = 1;
    } else {
      // 현재 숫자가 후보와 같으면 횟수 증가
      if (num === candidate) {
        count++;
      } else {
        // 다르면 횟수 감소
        count--;
      }
    }
  }

  // 문제의 제약 조건에 따라 과반수 요소는 항상 존재하므로,
  // 마지막에 남은 candidate가 정답이다.
  return candidate;
};
