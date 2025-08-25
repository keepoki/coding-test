/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 * Tag: array
 */

// @lc code=start
/**
 * ## 문제
 * 정렬되어 있고 중복 없는 정수 배열 nums가 주어집니다.
 * 범위 [a, b]는 a부터 b까지의 모든 정수 집합(양 끝 포함)을 의미합니다.
 * nums의 모든 숫자를 정확히 한 번씩 포함하는 가장 작은 수의 정렬된 범위 목록을 반환하세요.
 * 즉, nums의 각 요소는 정확히 하나의 범위에 포함되어야 하며, 어떤 정수 x도 범위에
 * 포함되어 있지만 nums에는 없는 경우가 있어서는 안 됩니다.
 *
 * 각 범위 [a, b]는 다음 형식으로 출력되어야 합니다:
 * - a != b인 경우: "a->b"
 * - a == b인 경우: "a"
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [0,1,2,4,5,7]
 * 출력: ["0->2","4->5","7"]
 * 설명: 범위는 다음과 같습니다:
 * [0,2] → "0->2"
 * [4,5] → "4->5"
 * [7,7] → "7"
 *
 * 예시 2:
 * 입력: nums = [0,2,3,4,6,8,9]
 * 출력: ["0","2->4","6","8->9"]
 * 설명: 범위는 다음과 같습니다:
 * [0,0] → "0"
 * [2,4] → "2->4"
 * [6,6] → "6"
 * [8,9] → "8->9"
 *
 * ## 제약 조건
 * 1. 0 <= nums.length <= 20
 * 2. -2³¹ <= nums[i] <= 2³¹ - 1
 * 3. nums의 모든 값은 고유(unique)합니다.
 * 4. nums는 오름차순 정렬되어 있습니다.
 *
 * ## 문제 요약
 * 배열에 연결된 범위를 찾아서 형식에 맞는 출력 값을 배열에 저장하여 반환해야한다.
 *
 * ## 풀이 과정
 * a와 b라는 시작과 끝이 있어서 투 포인터를 활용하는 방식이 떠올랐다.
 * 1. nums 배열이 비어 있으면 빈 배열을 리턴한다.
 * 2. 시작 숫자 a에 첫 번째 요소를 설정한다.
 * 3. 배열을 처음부터 끝까지 순회하면서 현재 숫자와 다음 숫자의 차이가 1인지 판단한다.
 * 4. 아니라면 현재 숫자와 a의 값이 같은지 비교한다.
 *    - 같으면, 현재 숫자를 결과 배열에 "a" 형식으로 추가한다.
 *    - 다르면, a와 현재 숫자를 결과 배열에 "a->b" 형식으로 추가한다.
 *    - 그리고 a에 다음 숫자를 대입한다.
 * 5. 결과 배열을 반환한다.
 *
 * ## 풀이 요약
 * 입력 배열을 순회하며 연속된 숫자의 범위를 찾아, 시작과 끝 숫자가 같으면
 * "a", 다르면 "a->b" 형태로 결과 배열에 추가하는 방식입니다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 34/34 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 99.34 % of javascript submissions (51.6 MB)
 *
 * ## 점검
 *
 *
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  if (nums.length < 1) return [];

  let startNum = nums[0];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const nextNum = nums[i + 1];

    // nextNum이 배열의 범위를 벗어나서 계산 결과가 NaN이 나와도 1이 아니므로
    // 해당 조건은 성립한다.
    if (Math.abs(currentNum - nextNum) !== 1) {
      if (startNum === currentNum) {
        result.push(`${currentNum}`);
      } else {
        result.push(`${startNum}->${currentNum}`);
      }

      startNum = nextNum;
    }
  }

  return result;
};
// @lc code=end

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));

/**
 * 다른 풀이 방법
 * Claude Sonnet 4의 풀이, 투 포인터
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 */
const summaryRanges2 = (nums) => {
  if (nums.length === 0) return [];

  const result = [];
  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 연속된 숫자인지 확인
    if (nums[i] === end + 1) {
      end = nums[i]; // 범위 확장
    } else {
      // 연속되지 않으면 현재 범위를 결과에 추가
      if (start === end) {
        result.push(start.toString());
      } else {
        result.push(`${start}->${end}`);
      }
      // 새로운 범위 시작
      start = nums[i];
      end = nums[i];
    }
  }

  // 마지막 범위 추가
  if (start === end) {
    result.push(start.toString());
  } else {
    result.push(`${start}->${end}`);
  }

  return result;
};

/**
 * 다른 풀이 방법
 * Gemini 2.5 Flash의 풀이
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 */
const summaryRanges3 = function(nums) {
    // 결과로 반환할 배열을 초기화합니다.
    const result = [];
    // 입력 배열이 비어있으면 빈 배열을 반환합니다.
    if (nums.length === 0) {
        return result;
    }

    // 배열을 순회하기 위한 포인터 i를 0으로 초기화합니다.
    let i = 0;
    while (i < nums.length) {
        // 현재 범위의 시작점을 start에 저장합니다.
        const start = nums[i];
        // 연속된 숫자를 찾기 위해 포인터 i를 증가시킵니다.
        // 다음 숫자가 현재 숫자 + 1과 같으면 연속된 숫자이므로 계속 진행합니다.
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }

        // 현재 범위의 끝점을 end에 저장합니다.
        const end = nums[i];

        // 시작점과 끝점이 같으면 (하나의 숫자만 있는 범위)
        if (start === end) {
            // 해당 숫자를 문자열로 변환하여 결과 배열에 추가합니다.
            result.push(`${start}`);
        } else {
            // 시작점과 끝점이 다르면 (두 개 이상의 숫자가 있는 범위)
            // "a->b" 형식의 문자열로 변환하여 결과 배열에 추가합니다.
            result.push(`${start}->${end}`);
        }

        // 다음 범위의 시작점으로 이동하기 위해 포인터 i를 증가시킵니다.
        i++;
    }

    // 최종 결과 배열을 반환합니다.
    return result;
};