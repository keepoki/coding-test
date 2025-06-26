/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * 풀이에 실패하여 다른 사람의 풀이를 분석하였다.
 * isBalanced 함수에서 leftDepth와 rightDepth를 찾아가는 과정까지는 비슷했지만,
 * leftDepth와 rightDepth의 차이가 2이상 난다면 이진 트리가 아닌 것을 알고 있어도
 * 어떤 방식으로 재귀를 풀어나가야 할지에 대한 식을 전개하지 못하였다.
 * isBalanced 함수에서 리턴할 때 leftDepth와 rightDepth의 차이가 1 이하라면
 * 이진 트리에 부합하여 다시 다음 노드를 탐색하는 과정을 반복하는 것이 이번 문제
 * 풀이의 핵심이었다.
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  if (root == null) return true;

  // 트리 균형을 비교하기 위해 왼쪽 노드와 오른쪽 노드의 깊이를 구한다.
  const leftDepth = depth(root.left);
  const rightDepth = depth(root.right);

  // 이진 트리는 leftDepth와 rightDepth의 차이는 1 이하이다.
  // 차이가 1 이하일 때는 다음 노드를 다시 탐색하여 비교한다.
  return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

/**
 * @param {TreeNode} node
 * @return {number}
 */
function depth(node) {
  if (node == null) return 0;
  return Math.max(depth(node.left), depth(node.right)) + 1;
}
// @lc code=end
