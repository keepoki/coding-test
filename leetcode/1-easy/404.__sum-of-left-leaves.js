/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 */

// @lc code=start
/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * 2진 트리에서 자식이 없는 왼쪽 잎 노드를 더해서 출력해야 한다.
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = (root) => {
  let sum = 0;

  const traversal = (node) => {
    if (!node) return;

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    traversal(node.left);
    traversal(node.right);
  };

  traversal(root);

  return sum;
};
// @lc code=end

/**
 * 함수 내부에 함수를 두지 못하는 경우를 상정하여
 * 함수를 나누면 아래와 같은 코드가 나올 수 있다.
 * @param {TreeNode} root
 * @returns {number}
 */
const sumOfLeftLeaves2 = (root) => calculateLeftLeaves(root, false);

/**
 * @param {TreeNode} node
 * @param {boolean} isLeft
 * @returns {number}
 */
const calculateLeftLeaves = (node, isLeft) => {
  if (!node) return 0;

  if (!node.left && !node.right && isLeft) {
    return node.val;
  }

  return calculateLeftLeaves(node.left, true) + calculateLeftLeaves(node.right, false);
}
