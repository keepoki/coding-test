/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let same = false; // 숫자가 같은지 판단
  let sameNums = []; // 같은 숫자의 목록
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // * 간단한 풀이 방법
    // if (nums.filter(ele => ele == num).length === 1) {
    //   return num;
    // }

    // 똑같은 숫자 목록을 확인하여 있으면 건너 뛴다.
    if (sameNums.includes(num)) {
      continue;
    }

    for (let k = i + 1; k < nums.length; k++) {
      const nextNum = nums[k];
      if (nums[k] === num) {
        // 같은 숫자가 있으면 같은 숫자 목록에 넣는다.
        sameNums.push(nextNum);
        same = true;
        break;
      } else {
        same = false;
      }
    }

    // 같은 숫자가 없다면 리턴
    if (!same) {
      return num;
    } else if (i == nums.length - 1) {
      // 마지막 숫자만 남았으면 마지막 숫자를 리턴 한다.
      return num;
    }
  }
};
// @lc code=end

// console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([2,2,1])); // 4

