/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const mergeNums = mergeArrays(nums1, nums2).sort((a, b) => a - b);
  if (mergeNums.length < 1) return 0;
  const median = (mergeNums.length - 1) / 2;
  return (mergeNums[Math.floor(median)] + mergeNums[Math.ceil(median)]) / 2;
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function mergeArrays(nums1, nums2) {
  return [...nums1, ...nums2];
}
// @lc code=end

/*
  크기 m과 n의 두 정렬된 배열 num1과 num2가 주어진다.
  두 정렬된 배열의 중앙값을 반환해야한다.
  전체 실행 시간 복잡도는 O(log (m+n))이어야 한다.
  배열 num1과 num2를 합쳐서 길이가 홀수라면 가운데 인덱스의 값을 찾아서 반환하고
  길이가 짝수라면 가운데 인덱스는 소수점 0.5로 떨어지므로 왼쪽과 오른쪽값을
  더하고 2로 나누어서 정확한 중앙값을 구해서 반환하면 된다.
 */

console.log(findMedianSortedArrays([1,2,3,4,5], [8,9,10,11,12]));

// 처음 풀었던 방법
function findMedianSortedArrays2(nums1, nums2) {
  const mergeNums = mergeArrays(nums1, nums2);
  if (mergeNums.length < 1) return 0;

  let result = 0;
  const idx = Math.floor(mergeNums.length / 2) - 1;
  if (mergeNums.length % 2 === 0) {
    result = (mergeNums[idx] + mergeNums[idx+1]) / 2;
  } else {
    const idx = Math.floor(mergeNums.length / 2);
    result = mergeNums[idx];
  }

  return result;
};
