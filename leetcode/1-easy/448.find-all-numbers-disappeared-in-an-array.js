/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * 숫자는 1부터 n까지인데, 없는 숫자를 찾아야 한다.
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const result = [];
  const set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i + 1)) {
      result.push(i + 1);
    }
  }

  return result;
};
// @lc code=end

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
// console.log(findDisappearedNumbers([1, 1])); // [2]


/**
 * 뤼튼 AI의 풀이
 * 기존의 배열을 활용하여 메모리와 속도 최적화가 잘 된 풀이이다.
 * 숫자는 1부터 n까지 정해져 있기 때문에, 숫자 순서가 중복되거나 랜덤이라도
 * 해당 숫자를 인덱스로 변환시켜서 그 인덱스에 있는 값을 음수로 전환하여 표시했다.
 * 따라서 음수가 아닌 값에 해당하는 인덱스를 없는 숫자로 판단할 수 있게 되었다.
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers2(nums) {
  const n = nums.length;

  // 배열의 각 숫자를 해당 인덱스에 음수로 표시
  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1; // 현재 숫자의 인덱스 계산
    nums[index] = -Math.abs(nums[index]); // 해당 인덱스의 값을 음수로 변경
  }

  const missingNumbers = [];
  // 음수가 아닌 인덱스를 찾아서 결과 배열에 추가
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      missingNumbers.push(i + 1); // 1부터 n까지의 숫자 추가
    }
  }

  return missingNumbers; // 누락된 숫자 배열 반환
}

console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
console.log(findDisappearedNumbers2([1, 1])); // [2]