/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition
 * Tag: array
 */

// @lc code=start
/**
 * ## 문제
 * 정수 배열 nums가 주어졌습니다. 이 배열은 2n 개의 정수를 포함합니다. 이 정수들을 n개의
 * 쌍 (a1, b1), (a2, b2), ..., (an, bn) 으로 묶을 때, 모든 i에 대해 min(ai, bi)의
 * 합이 최대가 되도록 하세요. 그 최댓값을 반환하세요.
 *
 * ## 예시
 * 예제 1
 * 입력: nums = [1,4,3,2]
 * 출력: 4
 * 설명: 가능한 모든 쌍의 묶음 (원소 순서는 무시)
 * (1, 4), (2, 3) → min(1,4) + min(2,3) = 1 + 2 = 3
 * (1, 3), (2, 4) → min(1,3) + min(2,4) = 1 + 2 = 3
 * (1, 2), (3, 4) → min(1,2) + min(3,4) = 1 + 3 = 4
 * 따라서 최댓값은 4
 *
 * 예제 2
 * 입력: nums = [6,2,6,5,1,2]
 * 출력: 9
 * 설명: 최적의 쌍은 (2,1), (2,5), (6,6)
 * → min(2,1) + min(2,5) + min(6,6) = 1 + 2 + 6 = 9
 *
 * ## 제약 조건
 * 1. 1 <= n <= 10^4
 * 2. nums.length == 2 * n
 * 3. -10^4 <= nums[i] <= 10^4
 *
 * ## 문제 요약
 * 값들을 min(an, bn) 쌍으로 묶고 더했을 때 최대값을 반환해야 한다.
 *
 * ## 풀이 과정
 * 1. 오름차순으로 정렬, 값을 더하면서 누적 시킬 변수 0으로 초기화. sum
 * 2. 배열을 i += 2으로 순회한다.
 * 3. 현재 요소를 sum에 더해준다.
 *
 * ## 풀이 요약
 * 배열을 오름차순 정렬하고 배열을 i += 2 방식으로 순회하며 현재 요소에 대한 값을
 * 더해준다.
 *
 * ## 시간 복잡도: O(n log n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 85/85 cases passed (38 ms)
 * Your runtime beats 82.11 % of javascript submissions
 * Your memory usage beats 84.26 % of javascript submissions (59.2 MB)
 *
 * ## 점검
 * 15분 중의 5분을 남겨두고 풀었다. 처음에는 복잡하게 생각해서 정렬 후에
 * 포인터 접근으로 했었는데, 그럴 필요 없고 비교도 할 필요 없이 인덱스를 +2로
 * 순회하면서 현재 요소를 더해주면 된다는 것을, 방식을 바꿔가면서 찾을 수 있었다.
 *
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < nums.length - 1; i += 2) {
    sum += nums[i];
  }

  return sum;
};
// @lc code=end

console.log(arrayPairSum([1, 4, 3, 2]));


/**
 * GPT-5의 풀이
 *
 * ## 풀이 과정
 * 배열을 정렬해야 최적 쌍을 만들 수 있을 것 같지만,
 * 사실 -10^4 ≤ nums[i] ≤ 10^4 라는 값의 범위 제한이 있습니다.
 *
 * 따라서 카운팅 정렬(Counting Sort) 기법을 활용할 수 있습니다.
 * → 값의 빈도를 저장하는 배열을 만들고, 이를 순회하면서 짝을 지으면 됩니다.
 *
 * ## 실행 순서 디버깅
 * nums = [1, 4, 3, 2]
 *
 * 1. 카운팅 배열 채우기
 * OFFSET = 10000
 * counts[1+10000]++, counts[4+10000]++, counts[3+10000]++, counts[2+10000]++
 * → 결국 counts[10001]=1, counts[10002]=1, counts[10003]=1, counts[10004]=1
 *
 * 2. 카운팅 배열 순회
 * i = 10001 (값 = 1) → take = true → sum = 1, take = false
 * i = 10002 (값 = 2) → take = false → skip, take = true
 * i = 10003 (값 = 3) → take = true → sum = 1 + 3 = 4, take = false
 * i = 10004 (값 = 4) → take = false → skip
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 85/85 cases passed (21 ms)
 * Your runtime beats 94.28 % of javascript submissions
 * Your memory usage beats 64.76 % of javascript submissions (60.2 MB)
 *
 * @param {number[]} nums
 * @returns {number}
 */
const arrayPairSum2 = (nums) => {
  const OFFSET = 10000; // 음수 보정용
  const counts = new Array(20001).fill(0);

  // 값의 등장 횟수를 카운팅
  for (const num of nums) {
    counts[num + OFFSET]++;
  }

  let sum = 0;
  let take = true; // 한 칸 건너뛰며 min값 선택

  // 카운팅 배열 순회
  for (let i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      if (take) {
        sum += i - OFFSET; // 실제 값 복원 후 더하기
      }
      take = !take; // 번갈아 선택
      counts[i]--;
    }
  }

  return sum;
};

console.log(arrayPairSum2([1, 4, 3, 2]));