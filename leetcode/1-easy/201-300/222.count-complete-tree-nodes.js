/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
  return traversal(root, 0);
};

/**
 * @param {TreNode} node
 * @param {number} count
 * @return {number}
 */
function traversal(node, count) {
  if (!node) return count;

  // 탐색 중 해당하는 노드를 개수에 더한다.
  count++;

  // 다음 노드를 탐색한다.
  count = traversal(node.left, count);
  count = traversal(node.right, count);

  return count;
}

// @lc code=end

