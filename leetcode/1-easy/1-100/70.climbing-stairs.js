/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n <= 1) return 1;
  let prev = 1, curr = 1, temp = 0;

  for (let i = 2; i <= n; i++) {
    temp = prev + curr;
    prev = curr;
    curr = temp;
  }
  return curr;
};
// @lc code=end

/*
  어떤 규칙이 있는지 찾아보다, 현재 n의 스텝에 대한 경우의 수는
  n - 1의 경우의 수 + n - 2의 경우의 수인 것을 찾아냈다.
  재귀 함수로 푼 결과, 처리하는데 걸리는 시간이 걸림돌이 되었다.
  const climbStairs = function(n) {
    if (n <= 1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
  };
  따라서 결과를 누적하는 반복문으로 처리하도록 방법을 바꾸었다.
*/

// console.log(climbStairs(1)); // 1 ( 1 )
// console.log(climbStairs(2)); // 2 ( 1 + 1 )
// console.log(climbStairs(3)); // 3 ( 1 + 2 )
// console.log(climbStairs(4)); // 5 ( 2 + 3 )
// console.log(climbStairs(5)); // 8 ( 3 + 5 )
// console.log(climbStairs(6)); // 13 ( 5 + 8 )
// console.log(climbStairs(7)); // 21 ( 8 + 13 )
// console.log(climbStairs(8)); // 34 ( 13 + 21 )


/*
  * 다른 사람의 풀이 *
  재귀 함수를 활용하는 방법 중 메모이제이션을 통해 계산 시간을 단축 시킬 수 있다.
  그래도 반복문 처리가 조건을 찾는 과정이 없기 때문에 메모이제이션 재귀 함수보다
  처리가 더 빠름을 알 수 있다.
*/

/**
 * @param {number} n
 * @param {Map<number, number>} memo
 * @return {number}
 */
const climbStairsMemo = (n, memo) => {
  if (n <= 1) return 1;

  if (!memo.has(n)) {
    memo.set(n, climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo));
  }
  return memo.get(n);
}
/** @param {number} n @return {number} */
const climbStairsStart = (n) => {
  const memo = new Map();
  return climbStairsMemo(n, memo);
}

console.log(climbStairsStart(1));
console.log(climbStairsStart(2));
console.log(climbStairsStart(3));
console.log(climbStairsStart(4));
console.log(climbStairsStart(5));
console.log(climbStairsStart(6));
console.log(climbStairsStart(7));
console.log(climbStairsStart(8));