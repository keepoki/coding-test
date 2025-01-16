/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[k] = nums[i];
      ++k;
    }
  }

  return k;
};
// @lc code=end

// const result = removeDuplicates([1,1,2]);
const result = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log(result);

/*
  * 풀이에 실패하여 다른 사람의 풀이를 분석
  문제의 의도를 정확하게 파악하지 못한 것 같다. 처음에는 Set 자료구조를 사용하여
  중복을 제거하고 Size를 반환하면 될 것이라 생각했지만, 다른 사람의 문제 풀이를 보고
  nums의 배열 구조 또한 맞추어야 한다는 사실을 깨달았다.
  https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3676877/best-method-100-c-java-python-beginner-friendly/?source=vscode
*/