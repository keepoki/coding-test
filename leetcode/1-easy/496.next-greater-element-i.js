/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * 1. nums 요소들을 탐색하면서 nums2에 해당하는 숫자 A를 찾는다.
 * 2. num2에서 찾은 숫자 A 뒤에 있는 요소들을 탐색하여 더 큰 수가 있다면
 * 해당 하는 숫자를, 아니라면 -1을 삽입한다.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  const result = [];
  let isGreater = false;
  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
    const findIdx = nums2.findIndex(ele => ele == num1);
    if (findIdx == -1) continue;

    for (let j = findIdx + 1; j < nums2.length; j++) {
      const num2NextEle = nums2[j];
      if (num1 < num2NextEle) {
        isGreater = true;
        result.push(num2NextEle);
        break;
      }
    }

    if (isGreater === false) {
      result.push(-1);
    }
    isGreater = false;
  }

  return result;
};
// @lc code=end

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));

/**
 * GPT-4o의 풀이, 스택과 해시맵으로 해결하였다. 처리 속도가 더 빠르다.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement2 = (nums1, nums2) => {
  const stack = [];
  const nextGreaterMap = new Map();

  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      const prev = stack.pop();
      nextGreaterMap.set(prev, num);
    }
    stack.push(num);
  }

  // stack에 남은 값은 다음 큰 수가 없는 것이므로 -1로 설정
  while (stack.length) {
    nextGreaterMap.set(stack.pop(), -1);
  }

  return nums1.map((num) => nextGreaterMap.get(num));
};