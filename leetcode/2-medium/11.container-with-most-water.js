/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * 높이와 길이를 이용하여 가장 넓은 범위를 찾아야 하는 문제이다.
 * 길이는 A의 인덱스와 B의 인덱스의 거리이다.
 * 풀이에 실패하였다.
 * GPT-3.5의 풀이를 검색하여 핵심만 가지고 다시 풀어보았다.
 * 1. 투 포인터(Two Pointer) 기법을 사용하는 문제이다.
 * 2. 양 끝에서 시작해서, 더 낮은 쪽의 포인터를 안쪽으로 이동시키면서 최대 면적을 계산한다.
 * 3. 넓이를 결정 짓는 것은 낮은 높이이다.
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while(left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(minHeight * width, maxArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
// @lc code=end

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([1, 2, 1])); // 2

/**
 * 높이와 길이를 이용하여 가장 넓은 범위를 찾아야 하는 문제이다.
 * 최대 높이를 기준으로 하겠다는 생각으로 접근하여 실패하였다.
 * [1, 2, 1]의 결과가 2인데 1으로 나오면서 막혔다.
 * @param {number[]} height
 * @return {number}
 */
const failedMaxArea = (height) => {
  const maxHeightIdx = height.reduce(
    (acc, cur, idx, arr) => (cur > arr[acc] ? idx : acc),
    0
  );
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    const num = height[i];
    const x = Math.abs(maxHeightIdx - i);
    maxArea = Math.max(maxArea, num * x);
  }

  return maxArea;
};

/**
 * 이중 반복문이라는 원초적인 방법의 풀이로 정답은 맞았겠지만,
 * 테스트 케이스의 시간이 초과되어 실패한다.
 * @param {number[]} height
 * @return {number}
 */
const failedMaxArea2 = (height) => {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 1; j < height.length; j++) {
      const width = Math.abs(i - j);
      const minHeight = Math.min(height[i], height[j])
      maxArea = Math.max(maxArea, minHeight * width);
    }
  }

  return maxArea;
};

console.log(failedMaxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(failedMaxArea2([1, 1])); // 1
console.log(failedMaxArea2([1, 2, 1])); // 2
console.log(failedMaxArea2([
  2, 5, 3, 8, 7, 6, 4, 1, 9, 2,
  10, 8, 5, 4, 7, 12, 9, 11, 6, 3,
  7, 8, 12, 14, 13, 10, 9, 8, 7, 15,
  16, 12, 11, 9, 10, 13, 14, 16, 15, 14,
  12, 9, 8, 7, 6, 5, 4, 7, 9, 11
])); // 390