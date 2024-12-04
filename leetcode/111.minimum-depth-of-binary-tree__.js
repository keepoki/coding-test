/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {
  // 빈 트리의 깊이는 0
  if (!root) return 0;

  // 루트 노드가 리프 노드인 경우 1
  if (!root.left && !root.right) return 1;

  // 왼쪽 또는 오른쪽 자식 노드가 없는 경우
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }

  // 왼쪽과 오른쪽 자식이 모두 있는 경우
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
// @lc code=end

/*
  * 풀이에 실패하여 뤼튼의 풀이를 분석
  모든 경우의 수에 대한 조건을 조금 놓친 것 같다는 것을 깨달았음
  뤼튼의 풀이는 정말 심플하고 주석으로 설명까지 완벽하였다.
 */