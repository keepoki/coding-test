/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * n개의 정수로 구성된 배열 nums가 주어집니다. nums의 각 원소 nums[i]는 1에서 n까지의
 * 범위에 있습니다. 이 배열에 나타나지 않는 1부터 n까지의 모든 정수를 배열로 반환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [4, 3, 2, 7, 8, 2, 3, 1]
 * 출력: [5, 6]
 * 설명: 주어진 배열에는 1,2,3,4,7,8이 포함되어 있습니다. 1부터 8까지의 정수 중
 * 포함되지 않은 것은 5와 6입니다.
 *
 * 예시 2:
 * 입력: nums = [1, 1]
 * 출력: [2]
 * 설명: 주어진 배열에는 1이 포함되어 있습니다. 1부터 2까지의 정수 중 포함되지 않은 것은
 * 2입니다.
 *
 * ## 제약 조건
 * 1. n == nums.length
 * 2. 1 <= n <= 105
 * 3. 1 <= nums[i] <= n
 *
 * ## 추가 도전
 * 추가 공간 없이 O(n)의 시간 복잡도로 이 문제를 해결할 수 있을까요?
 * 반환되는 리스트는 추가 공간으로 간주하지 않아도 됩니다.
 *
 * ## 풀이 과정
 * 1. nums 배열 길이 만큼의 새로운 배열 memory를 생성
 * 2. nums 배열을 순회하면서 memory에 nums의 요소를 인덱스로 사용하여
 *    null과 undefined를 제외한 값을 추가한다.
 * 3. 결과 배열 result를 생성
 * 4. 1부터 n까지(nums.length) 순회하면서 memory[i]에 값이 없으면 result 배열에
 *    현재 값 i를 추가한다.
 *
 * ## 풀이 요약
 * 새로운 배열을 생성하여 주어진 숫자들을 '방문' 표시하고, 방문되지 않은 인덱스를 찾아
 * 반환한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 35/35 cases passed (6 ms)
 * Your runtime beats 91.78 % of javascript submissions
 * Your memory usage beats 89.07 % of javascript submissions (71.4 MB)
 *
 * ## 점검
 * 제한 시간 15분이 지났지만 조금만 더 하면 풀 수 있을 것 같아서 계속 도전하였는데
 * 푸는데 25분이 걸려서 실패로 간주한다. 다음에 15분 내로 풀 수 있도록 다시 도전한다.
 * 그리고 추가 도전 조건으로는 어떻게 해야할지 막막하다..
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const memory = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    memory[nums[i]] = true;
  }

  const result = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (memory[i] == null) {
      result.push(i);
    }
  }

  return result;
};
// @lc code=end

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));

/**
 * ## 추가 도전
 * 추가 공간 없이 O(n)의 시간 복잡도로 이 문제를 해결할 수 있을까요?
 * 반환되는 리스트는 추가 공간으로 간주하지 않아도 됩니다.
 *
 * Gemini 2.5 Flash의 풀이
 * 이 문제의 핵심은 배열의 값과 인덱스를 연결하여 원래 배열 자체를 해시 테이블처럼
 * 사용하는 것입니다.
 *
 * ## 풀이 과정
 * ### 1단계: 마킹 (Marking)
 * 주어진 배열 nums를 순회하면서, 각 숫자의 절대값을 인덱스로 활용하여 "이 숫자는 배열에
 * 존재한다"는 표시를 합니다.
 * - nums의 각 원소 v에 대해, 인덱스 v - 1에 해당하는 nums 배열의 값을 음수로 바꿉니다.
 * - 이렇게 하면 nums[i]라는 값이 존재할 때, nums[nums[i]-1]의 부호가 음수가 되어,
 *   해당 인덱스에 대응하는 숫자가 발견되었다는 것을 알 수 있습니다.
 * - 예를 들어, nums[i]가 4라면, nums[3]의 값을 음수로 바꿉니다. 만약 nums[3]이 이미
 *   음수라면, 이는 중복된 숫자이므로 그대로 둡니다.
 *
 * ### 2단계: 누락된 숫자 찾기
 * 마킹 과정이 완료된 후, nums 배열을 다시 한 번 순회합니다.
 * - 이 때, 배열의 값이 양수인 인덱스 i를 찾습니다.
 * - 값이 양수라는 것은 해당 인덱스에 해당하는 숫자가 원래 배열에 나타나지 않았다는 의미입니다.
 * - 이 인덱스 i에 1을 더한 값(i + 1)이 바로 우리가 찾고 있는 누락된 숫자입니다.
 *
 * ### 3단계: 결과 반환
 * 2단계에서 찾은 모든 누락된 숫자들을 새로운 배열에 담아 반환합니다. 이 반환 배열은 추가
 * 공간으로 간주하지 않습니다.
 *
 *
 * 이 방식은 배열의 값을 인덱스와 연결하는 '인플레이스(in-place)' 접근법을 사용하여 추가
 * 공간 없이 문제를 해결합니다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 35/35 cases passed (7 ms)
 * Your runtime beats 84.46 % of javascript submissions
 * Your memory usage beats 59.28 % of javascript submissions (73 MB)
 *
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers2 = (nums) => {
  // 1. 첫 번째 순회: 배열의 값을 인덱스로 활용하여 "존재하는 숫자"에 마킹하기
  for (let i = 0; i < nums.length; i++) {
    // 현재 값의 절대값을 인덱스로 사용
    const index = Math.abs(nums[i]) - 1;

    // 해당 인덱스의 값을 음수로 만들어 마킹
    // 이미 음수일 경우 (중복된 숫자) 그대로 둠
    if (nums[index] > 0) {
      nums[index] *= -1;
    }
  }

  // 2. 두 번째 순회: 양수 값을 가진 인덱스를 찾아 결과 배열에 추가하기
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // 값이 양수이면, 해당 인덱스+1의 숫자가 원래 배열에 없었다는 의미
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};
