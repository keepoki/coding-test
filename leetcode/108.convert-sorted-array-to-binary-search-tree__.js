/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  return pushNode(nums, 0, nums.length - 1);
};

function pushNode(nums, begin, end) {
  // nums는 오름차순으로 정렬되어 있으므로 begin이 크면 탐색을 끝낸다.
  if (begin > end) {
    return null;
  }

  // 탐색 대상의 중간 노드를 찾는다. (짝수라면 올림)
  const mid = Math.ceil((begin + end) / 2);
  // 중간 노드를 생성
  const node = new TreeNode(nums[mid]);
  // 왼쪽 노드의 경우 처음 노드와 중간-1 번째 노드와 비교한다.
  // 마지막엔 begin 노드가 남는다.
  node.left = pushNode(nums, begin, mid - 1);
  // 오른쪽 노드의 경우 중간+1 번째 노드와 마지막 노드와 비교한다.
  // 마지막엔 end 노드가 남는다.
  node.right = pushNode(nums, mid + 1, end);

  return node;
}
// @lc code=end

/*
  * 풀이에 실패하여 다른 사람의 풀이를 분석
  시간은 흘러가는데 어떤 방식으로 접근해야 하는지 깨닫지 못하여
  다른 사람의 풀이를 보면서 분석하기로 하였다. 분석해보니 생각했던 부분과
  어느정도 일치한 부분은 반을 나누는 것, 틀린 부분은 처음과 마지막을 비교하는
  부분이었다. 중간의 요소와 우측, 처음의 요소와 중간을 비교한다는 것이 핵심이다.
*/