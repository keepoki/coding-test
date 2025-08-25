/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 * Tags: array | two-pointers
 */

// @lc code=start
/**
 * ## 문제
 * 주어진 비내림차순으로 정렬된 정수 배열 nums에서, 중복된 요소를 제자리에서 제거하여
 * 각 고유한 요소가 한 번만 나타나도록 하세요. 요소들의 상대적인 순서는 동일하게
 * 유지되어야 합니다. 그리고 nums에 있는 고유한 요소의 개수를 반환하세요.
 *
 * nums의 고유한 요소 개수를 k라고 할 때, 정답으로 인정받기 위해 다음을 수행해야 합니다:
 * - 배열 nums를 변경하여 nums의 첫 k개 요소가 처음에 nums에 존재했던 순서대로 고유한
 *   요소들을 포함하도록 합니다. nums의 나머지 요소들과 nums의 크기는 중요하지 않습니다.
 * - k를 반환하세요.
 *
 * 커스텀 채점기(Custom Judge):
 * 채점기는 다음 코드로 귀하의 솔루션을 테스트할 것입니다:
 * int[] nums = [...]; // 입력 배열
 * int[] expectedNums = [...]; // 올바른 길이의 예상 답변
 *
 * int k = removeDuplicates(nums); // 구현을 호출
 *
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 *     assert nums[i] == expectedNums[i];
 * }
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [1,1,2]
 * 출력: 2, nums = [1,2,_]
 * 설명: 함수는 k = 2를 반환, nums의 처음 두 요소는 각각 1과 2입니다.
 * 반환된 k 너머로 떠나는 것은 중요하지 않습니다(따라서 밑줄이 됨).
 *
 * 예시 2:
 * 입력: nums = [0,0,1,1,1,2,2,3,3,4]
 * 출력: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * 설명: 기능은 K = 5를 반환, nums의 처음 5개 요소는 각각 0, 1, 2, 3, 4입니다.
 * 반환된 k 너머로 떠나는 것은 중요하지 않습니다(따라서 밑줄이 됨).
 *
 * ## 제약 조건
 * 1 <= nums.length <= 3 * 104
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 *
 * ## 문제 요약
 * 정렬 순서를 유지한 상태로 중복 숫자를 제거하고, 고유한 숫자의 개수 k를 반환해야 한다.
 *
 * ## 풀이 과정
 * 1. nums를 직접 변경시켜야 한다.
 * 2. 반복문을 통해 이전 값과 현재 값이 같으면 해당 요소를 제거한다.
 * 3. 이전 값을 갱신한다.
 * 4. 중복되지 않은 값만 남아있는 nums의 길이를 반환한다.
 *
 * ## 풀이 요약
 * 배열을 순회하며 중복된 요소를 splice()로 제거하고, 인덱스를 조정하여 자리를 유지한다.
 *
 * ## 시간 복잡도: O(n²), 공간 복잡도: O(1)
 * nums.splice() 메서드로 인해서 제거된 모든 요소를 한 칸씩 앞으로 당겨야 하므로
 * 처리하는데 많은 시간이 소요된다.
 *
 * ## 제출 결과
 * 362/362 cases passed (56 ms)
 * Your runtime beats 7.68 % of javascript submissions
 * Your memory usage beats 55.07 % of javascript submissions (57.8 MB)
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length < 2) return nums.length;

  let prevNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i];
    if (prevNum === currentNum) {
      nums.splice(i - 1, 1);
      i--; // 앞의 요소가 없어진 것이기 때문에 인덱스를 되돌린다.
    }
    // 이전 값을 갱신
    prevNum = currentNum;
  }

  return nums.length;
};
// @lc code=end

// console.log(removeDuplicates([1,1,2]));
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

/**
 * 이전 풀이의 처리 속도가 너무나 아쉬워서 최적화된 방법으로 풀이를 다시 도전한다.
 * 목표: 시간 복잡도가 O(n²)보다 더 나은 방법을 찾으시오!!
 *
 * ## 풀이 과정
 * nums를 직접 변경시켜야 하는 것에는 변함이 없다. 태그 two-pointer에서 힌트를 찾았다.
 * right를 이동시키면서 left와 right의 숫자를 비교하고 숫자가 다르면
 * left 다음 인덱스에 right의 값을 넣는다. 기존의 값과 다음 값의 순서를 보장하기 위해
 * left 다음 인덱스에 넣는 것이다. left 값은 보존되어야 하니까.
 * 두 값이 같으면 계속 탐색한다.
 *
 * ## 풀이 요약
 * 투 포인터를 사용하여 중복이 아닌 요소만 배열의 앞쪽으로 이동시키며 고유 요소의 개수를 센다.
 *
 * ## 실행 순서 디버깅
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * +-----+-------+-----------+------------+------------------------+-------------+-----------------------+----------------------------------+
 * | 단계 | right | leftNum   | rightNum   | leftNum !== rightNum?  | left 변화   | nums[left] 할당        | nums 현재 상태                    |
 * +-----+-------+-----------+------------+------------------------+-------------+-----------------------+----------------------------------+
 * | 1   | 1     | 0         | 0          | false                  | 0 (유지)     | -                     | [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]   |
 * | 2   | 2     | 0         | 1          | true                   | 1           | nums[1] = 1           | [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]   |
 * | 3   | 3     | 1         | 1          | false                  | 1 (유지)     | -                     | [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]   |
 * | 4   | 4     | 1         | 1          | false                  | 1 (유지)     | -                     | [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]   |
 * | 5   | 5     | 1         | 2          | true                   | 2           | nums[2] = 2           | [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]   |
 * | 6   | 6     | 2         | 2          | false                  | 2 (유지)     | -                     | [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]   |
 * | 7   | 7     | 2         | 3          | true                   | 3           | nums[3] = 3           | [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]   |
 * | 8   | 8     | 3         | 3          | false                  | 3 (유지)     | -                     | [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]   |
 * | 9   | 9     | 3         | 4          | true                   | 4           | nums[4] = 4           | [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]   |
 * +-----+-------+-----------+------------+------------------------+-------------+-----------------------+----------------------------------+
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 362/362 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 78.47 % of javascript submissions (56.8 MB)
 */
const removeDuplicates2 = (nums) => {
  if (nums.length < 2) return nums.length;

  let left = 0;
  let right = 1;
  while (right < nums.length) {
    const leftNum = nums[left];
    const rightNum = nums[right];

    if (leftNum !== rightNum) {
      left++;
      nums[left] = rightNum;
    }
    right++;
  }

  return left + 1;
};

console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
