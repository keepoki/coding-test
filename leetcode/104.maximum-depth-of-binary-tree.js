/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
const maxDepth = function(root) {
  if (!root) return 0;
  return search(root.left, root.right, 1);
};

/**
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {number}
 */
function search(a, b, depth) {
  if (!a && !b) return depth;
  const leftDepth = a && search(a.left, a.right, depth + 1);
  const rightDepth = b && search(b.left, b.right, depth + 1);
  return Math.max(depth, leftDepth, rightDepth);
}
// @lc code=end

/**
 * * 다른 사람의 풀이 *
 * 다른 사람의 풀이를 보니 굳이 left right를 나눠서 탐색하거나
 * depth를 파라미터로 지정할 필요가 없었다는 것을 깨달았다.
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth2 = (root) => {
  if (!root) return 0;
  return Math.max(maxDepth2(root.left), maxDepth2(root.right)) + 1;
}