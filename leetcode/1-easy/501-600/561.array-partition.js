/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition
 */

// @lc code=start
/**
 * 숫자로 이루어진 배열에서 숫자 두개를 짝을 짓고 두 수중 작은 수끼리 더해서
 * 나오는 숫자 중 가장 큰 수를 반환해야하는 문제이다.
 * 규칙을 살펴보니 가장 작은 수끼리 짝을 지으면 된다.
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  const sorted = [...nums];
  sorted.sort((a, b) => a - b);

  // 오름차순으로 정렬하였기 때문에 짝에서 앞에 숫자를 더해주면 된다.
  let sum = 0;
  for (let i = 0; i < sorted.length - 1; i +=2 ) {
    const num = sorted[i];
    sum += num;
  }

  return sum;

  // 다른 쉬운 풀이 방법
  // return nums.sort((a,b) => a - b).reduce((acc, curr, idx) => idx % 2 === 0 ? acc + curr : acc, 0);
};
// @lc code=end
console.log(arrayPairSum([1,4,3,2]));
console.log(arrayPairSum([6,2,6,5,1,2]));

