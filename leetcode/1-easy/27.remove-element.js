/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 * Tags: array | two-pointers
 */

// @lc code=start
/**
 * ## 문제
 * 주어진 정수 배열 nums와 정수 val에 대해, nums에서 val의 모든 인스턴스(occurrence)를
 * 제자리에서(in-place) 제거하세요. 요소들의 순서는 변경될 수 있습니다.
 * 그 다음, nums에서 val과 같지 않은 요소들의 개수를 반환하세요.
 *
 * nums에서 val과 같지 않은 요소들의 개수를 k라고 할 때, 정답으로 인정받기 위해 다음을
 * 수행해야 합니다:
 * - 배열 nums를 변경하여 nums의 첫 k개 요소가 val과 같지 않은 요소들을 포함하도록 합니다.
 *   nums의 나머지 요소들과 nums의 크기는 중요하지 않습니다.
 * - k를 반환하세요.
 *
 * 커스텀 채점기(Custom Judge):
 * 채점기는 당신의 솔루션을 다음 코드로 테스트할 것입니다:
 *
 * int[] nums = [...]; // 입력 배열
 * int val = ...; // 제거할 값
 * int[] expectedNums = [...]; // 올바른 길이를 가진 예상 정답 배열.
 *                             /// val과 같지 않은 값들로 정렬되어 있습니다.
 *
 * int k = removeElement(nums, val); // 당신의 구현(함수)을 호출합니다.
 *
 * assert k == expectedNums.length;
 * sort(nums, 0, k); // nums 배열의 첫 k개 요소를 정렬합니다.
 * for (int i = 0; i < actualLength; i++) {
 *     assert nums[i] == expectedNums[i];
 * }
 *
 * ## 예시
 * 예시 1:
 * 입력: nums = [3,2,2,3], val = 3
 * 출력: 2, nums = [2,2,_,_]
 * 설명: 당신의 함수는 k = 2를 반환해야 하며, nums의 첫 두 요소는 2가 되어야
 * 합니다. 반환되는 k 이후의 요소들은 무엇이든 상관없습니다(그래서 밑줄로 표시했습니다).
 *
 * 예시 2:
 * 입력: nums = [0,1,2,2,3,0,4,2], val = 2
 * 출력: 5, nums = [0,1,4,0,3,_,_,_]
 * 설명: 당신의 함수는 k = 5를 반환해야 하며, nums의 첫 다섯 요소는
 * 0, 0, 1, 3, 4를 포함해야 합니다. 이 다섯 요소는 어떤 순서로든 반환될 수 있습니다.
 * 반환되는 k 이후의 요소들은 무엇이든 상관없습니다(그래서 밑줄로 표시했습니다).
 *
 * ## 제약 조건
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 50
 * 0 <= val <= 100
 *
 * ## 문제 요약
 * - 배열 nums를 변경하여 nums의 첫 k개 요소가 val과 같지 않은 요소들로 구성한다.
 *   요소들의 순서도 상관없다. nums의 나머지 요소들과 nums의 크기도 중요하지 않다.
 * - val과 다른 요소들의 개수 k를 반환해야 한다.
 *
 * ## 풀이 과정
 * 1. k는 val과 같지 않은 요소의 개수이다.
 * 2. 투 포인터로 시작지점은 left는 맨 앞, right는 맨 뒤로 설정한다.
 * 3. left는 val과 같은 요소를 찾을 때까지 오른쪽으로 탐색한다.
 * 4. right는 val과 다른 요소를 찾을 때까지 왼쪽으로 탐색한다.
 * 5. left와 right가 각각 조건에 맞는 요소를 찾았다면, 서로 데이터를 교환한다.
 * 6. 3번 과정을 left < right 조건에 부합할 때까지 이어나간다.
 *
 * ## 풀이 요약
 * 투 포인터 탐색으로 nums 재배치, k는 nums.filter로 val과 같지 않은 값의 길이로 반환
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 115/115 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 40.56 % of javascript submissions (53.7 MB)
 *
 * ## 점검
 * 문제를 제대로 파악하지 않고 답을 풀기에 급급했다. 예시를 보고, val과 같은 요소의 값을
 * 뒤로 배치해야 한다는 생각에 빠져 데이터를 교환하는 방식으로 풀었다.
 *
 * 그리고 불필요하게 val과 같지 않은 요소의 개수 k를 구하는 것에 또 다시 배열을 탐색한다.
 * 지금 방식으로는 요소에 대한 접근이 최적화는 되겠지만, 개수를 구하기 위해서는
 * 전체 탐색을 해야한다.
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  if (nums.length < 1) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const leftNum = nums[left];
    const rightNum = nums[right];

    if (leftNum === val && rightNum !== val) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }

    if (leftNum !== val) {
      left++;
    }
    if (rightNum === val) {
      right--;
    }
  }

  // console.log(nums);
  return nums.filter((num) => num !== val).length;
};
// @lc code=end

console.log(removeElement([4, 2, 0, 2, 2, 1, 4, 4, 1, 4, 3, 2], 4));
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([2], 3));

/**
 * val과 같지 않은 요소들의 개수 k와 nums 요소를 재배치하는 로직을 나눠서 풀었다는 것이
 * 아쉬운 마음이 들어, 한 번의 전체 탐색 로직으로 다시 도전한다.
 *
 * ## 풀이 과정
 * 투 포인터 방식으로 left와 right를 첫 번재 요소로 설정하고, 전체를 탐색한다.
 * 그리고 k 개수만큼 앞 요소를 val와 다른 값으로 채워 넣는다.
 * 1. right 요소가 val과 다른 값을 찾을 때까지 탐색한다.
 * 2. 1번 조건이 맞다면, left 요소에 right 요소의 데이터를 삽입하고
 *   left도 1 증가시킨다.
 * 3. left가 val과 다른 요소들의 개수 k이다. left를 반환한다.
 *
 * ## 풀이 요약
 * val이 아닌 요소들만 배열의 앞쪽으로 밀어 넣으며 개수를 세는 투 포인터 방식
 *
 * ## 실행 순서 디버깅
 * nums = [0, 1, 2, 2, 3, 0, 4, 2], target = 2
 * +-----+---------+------------+--------------------+-----------------+-------------+---------------------------------+
 * | 단계 | right   | rightNum   | rightNum !== val?  | nums[left] 할당 | left 변화    | nums 현재 상태                   |
 * +-----+---------+------------+--------------------+-----------------+-------------+---------------------------------+
 * | 1   | 0       | 0          | true               | nums[0] = 0     | 1           | [0, 1, 2, 2, 3, 0, 4, 2]        |
 * | 2   | 1       | 1          | true               | nums[1] = 1     | 2           | [0, 1, 2, 2, 3, 0, 4, 2]        |
 * | 3   | 2       | 2          | false              | -               | 2 (유지)     | [0, 1, 2, 2, 3, 0, 4, 2]        |
 * | 4   | 3       | 2          | false              | -               | 2 (유지)     | [0, 1, 2, 2, 3, 0, 4, 2]        |
 * | 5   | 4       | 3          | true               | nums[2] = 3     | 3           | [0, 1, 3, 2, 3, 0, 4, 2]        |
 * | 6   | 5       | 0          | true               | nums[3] = 0     | 4           | [0, 1, 3, 0, 3, 0, 4, 2]        |
 * | 7   | 6       | 4          | true               | nums[4] = 4     | 5           | [0, 1, 3, 0, 4, 0, 4, 2]        |
 * | 8   | 7       | 2          | false              | -               | 5 (유지)     | [0, 1, 3, 0, 4, 0, 4, 2]        |
 * +-----+---------+------------+--------------------+-----------------+-------------+---------------------------------+
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 115/115 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 79.59 % of javascript submissions (53.2 MB)
 */
const removeElement2 = (nums, val) => {
  if (nums.length < 1) return 0;

  let left = 0;
  let right = 0;
  
  while (right < nums.length) {
    const rightNum = nums[right];

    if (rightNum !== val) {
      nums[left] = rightNum;
      left++;
    }

    right++;
  }

  // console.log(nums);
  return left;
};

console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement2([4, 2, 0, 2, 2, 1, 4, 4, 1, 4, 3, 2], 4));
console.log(removeElement2([3, 2, 2, 3], 3));
console.log(removeElement2([2], 3));
