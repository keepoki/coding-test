/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * 풀이에 실패하여 GPT-4의 도움을 받음
 *
 * 입력 값으로 숫자형 배열이 주어지고, 배열 내의 서로 다른 숫자 3개를 더해서
 * 값이 0으로 끝나는 중복되지 않는 값의 조합을 리턴해야 한다.
 * 결국 3개의 포인트로 더해주어야 하는데, 반복해서 찾는 횟수를 최소화 해야한다.
 *
 * 1. 숫자를 찾는 반복을 줄이기 위해 정렬을 한다.
 * 2. 첫 번째 포인터의 시작은 첫 번째 인덱스
 * 두 번째 포인터의 시작은 마지막 인덱스
 * 세 번째 포인터의 시작은 마지막의 이전 인덱스
 * 3. 첫 번째 포인터는 고정하고 나머지 두 포인터로 탐색한다. 두 포인터 탐색이 끝난
 * 후에 첫 번째 포인터를 이동시킨다.
 * 4. 세 숫자의 합이 0이면 배열에 추가한다.
 * 5. 중복된 값을 건너뛴다.
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const result = [];
  
  nums.sort((a, b) => a - b);

  const lastIndex = nums.length - 1;

  for (let i = 0; i < nums.length - 2; i++) {
    // 중복된 첫 수 스킵
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 오름차순 정렬된 배열이므로, 현재 값이 양수면 더 이상 탐색 불필요
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = lastIndex;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // 중복 제거
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
// @lc code=end

console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0,0,0]));


/**
 * ------- 실패한 풀이 -----------
 * 입력 값으로 숫자형 배열이 주어지고, 배열 내의 서로 다른 숫자 3개를 더해서
 * 값이 0으로 끝나는 중복되지 않는 값의 조합을 리턴해야 한다.
 * 결국 3개의 포인트로 더해주어야 하는데, 반복해서 찾는 횟수를 최소화 해야한다.
 *
 * 1. 숫자를 찾는 반복을 줄이기 위해 정렬을 한다.
 * 2. 첫 번째 포인터의 시작은 첫 번째 인덱스
 * 두 번째 포인터의 시작은 마지막 인덱스
 * 세 번째 포인터의 시작은 마지막의 이전 인덱스
 * 3. 첫 번째 인덱스 요소의 절대값과 마지막 인덱스 + 마지막 이전 인덱스의 값을 비교한다.
 * 4. 비교한 절대 값이 왼쪽이 크면 첫 번째 포인터를 우측으로 이동 (+1)
 * 비교한 절대 값이 오른쪽이 크면 세 번째 포인터를 좌측으로 이동 (-1)
 * 5. 탐색하여 같은 값이 나오면 배열에 추가하고 세 번째 포인터를 좌측으로 이동 (-1)
 *
 * - 실패에 대한 분석 -
 * 정답과 비슷하게 정렬하고, 하나의 포인터는 고정 시킨 후 두 포인터로 찾으면서
 * 두 포인터의 탐색으로 처리될 것이라 생각했는데, 고정 시킨 포인터도 투 포인터의 탐색이
 * 끝난 뒤 옮겨주어야 하는 것을 하지 않았다. 또한 조건 자체가 잘못되었다.
 * @param {number[]} nums
 * @return {number[][]}
 */
const failedThreeSum = (nums) => {
  const result = [];
  const lastIdx = nums.length - 1;

  const sortArr = [...nums].sort((a, b) => a- b);

  let first = 0;
  let second = lastIdx;
  let third = lastIdx - 1;
  let firstNum = sortArr[first];
  let secondNum = sortArr[second];
  let thirdNum = sortArr[third];

  while (first <= second - 2) {
    firstNum = sortArr[first];
    secondNum = sortArr[second];
    thirdNum = sortArr[third];
    
    if (Math.abs(firstNum) > secondNum + thirdNum) {
      first++;
    } else if (Math.abs(firstNum) < secondNum + thirdNum) {
      third--;
    } else if (firstNum + secondNum + thirdNum === 0) {
      result.push([firstNum, secondNum, thirdNum]);
      third--;
    }

    if (third === first) {
      first++;
      third = second - 1;
    }
  }

  return result;
};