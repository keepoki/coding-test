/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 * Tags: array | hash-table
 */

// @lc code=start
/**
 * ## 문제
 * 정수 숫자 배열과 정수 목표가 주어졌을 때, 두 숫자의 인덱스를 반환하여 목표를 달성합니다.
 * 각 입력에 정확히 하나의 솔루션이 있다고 가정할 수 있으며,
 * 동일한 요소를 두 번 사용할 수는 없습니다. 답변은 어떤 순서로든 반환할 수 있습니다.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [2,7,11,15], target = 9
 * 출력: [0,1]
 * 설명: 왜냐하면 nums[0] + nums[1] == 9이고, 반환은 [0, 1]이다.
 *
 * 예시 2:
 * 입력: nums = [3,2,4], target = 6
 * 출력: [1,2]
 *
 * 예시 3:
 * 입력: nums = [3,3], target = 6
 * 출력: [0,1]
 *
 * ## 제약 조건
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * 유효한 답변은 단 하나뿐입니다.
 *
 * ## 추가 도전
 * 시간 복잡도 O(n²)보다 작은 알고리즘을 생각해낼 수 있나요?
 *
 * ## 문제 요약
 * 두 숫자의 합이 목표와 같은지 찾아서 두 숫자에 해당하는 인덱스를 반환해야 한다.
 *
 * ## 풀이 과정
 * 인덱스를 찾아야 하므로 정렬하는 투 포인터 방식을 비효율적이다.
 * 가장 간단한 방법은 2중 반복문으로 찾는 것이다.
 *
 * ## 풀이 요약
 * 2중 반복문으로 모든 경우의 수를 탐색한다.
 *
 * ## 시간 복잡도: O(n²), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 63/63 cases passed (32 ms)
 * Your runtime beats 40.77 % of javascript submissions
 * Your memory usage beats 93.47 % of javascript submissions (53.6 MB)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];

      if (sum === target) {
        return [i, j];
      }
    }
  }
};
// @lc code=end

/**
 * ## 추가 도전
 * 시간 복잡도 O(n²)보다 작은 알고리즘을 생각해낼 수 있나요?
 *
 * ## 풀이 과정
 * 데이터를 value와 index 속성으로 재구성하고
 * value를 기준으로 정렬해서 투 포인터로 탐색하는 방식은 어떨까?
 * 데이터 재구성과 정렬을 한 번에 하는 방법은? 없네, 재구성 후 정렬하자.
 *
 * ## 풀이 요약
 * 숫자-인덱스 쌍을 정렬한 후, 양 끝에서부터 투 포인터로 합을 탐색한다.
 *
 * ## 시간 복잡도: O(n log n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 63/63 cases passed (5 ms)
 * Your runtime beats 50.38 % of javascript submissions
 * Your memory usage beats 7.03 % of javascript submissions (57.4 MB)
 */
const twoSum2 = (nums, target) => {
  const mappedNums = nums.map((value, index) => ({ value, index }));
  mappedNums.sort((a, b) => a.value - b.value);

  let left = 0;
  let right = mappedNums.length - 1;

  while (left < right) {
    const leftNum = mappedNums[left];
    const rightNum = mappedNums[right];
    const sum = leftNum.value + rightNum.value;

    if (sum === target) {
      return [leftNum.index, rightNum.index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return null;
}

// console.log(twoSum2([3,2,4], 6));
// console.log(twoSum2([2,7,11,15], 9));

/**
 * ## 추가 도전
 * 시간 복잡도 O(n²)보다 작은 알고리즘을 생각해낼 수 있나요?
 *
 * ## 풀이 과정
 * 해시 맵 (key: num, value: index) 구성으로 현재 값을 저장하면서
 * target - nums[i]의 값이 해시 맵에 존재한다면 정답을 반환할 수 있지 않을까?
 *
 * ## 풀이 요약
 * 해시 맵에 저장하면서 target에서 현재 숫자를 뺀 값이 해시 맵에 있는지 확인한다.
 *
 * ## 실행 순서 디버깅
 * Input: nums = [2,7,11,15], target = 9
 * nums[0] = 2 => 9 - 2 => 7이 해시 맵에 없음, 2를 해시 맵에 저장
 * => map.set(2, 0)
 *
 * nums[1] = 7 => 9 - 7 => 2가 해시 맵에 있음, 해시 맵에 있는 값과 현재 인덱스 반환
 * => return [map.get(2), 1] => return [0, 1]
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 63/63 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 11.56 % of javascript submissions (56.6 MB)
 */

const twoSum3 = (nums, target) => {
  // key: num, value: index
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diffNum = target - num;

    if (map.has(diffNum)) {
      return [map.get(diffNum), i];
    }

    map.set(num, i);
  }

  return null;
}

console.log(twoSum3([3,2,4], 6));
console.log(twoSum3([2,7,11,15], 9));