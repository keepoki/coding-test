/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
 */

// @lc code=start

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 이진 탐색 트리에서 다른 두 노드의 값 간의 최소 절대 차이를 반환하는 문제이다.
 * 인접한 것이 아닌, 전체에서 비교해야 한다.
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
  let prevVal = null;
  let minDiff = Number.MAX_VALUE;

  // inOrder로 탐색해야 제대로 된 비교가 가능하다.
  // left - root, root - right
  const inOrder = (node) => {
    if (!node) return;
    inOrder(node.left);
    if (prevVal !== null) {
      minDiff = Math.min(Math.abs(node.val - prevVal), minDiff);
    }
    prevVal = node.val;
    inOrder(node.right);
  }

  inOrder(root);

  return minDiff;
};
// @lc code=end

console.log(getMinimumDifference(new TreeNode(1, null, new TreeNode(2)))); // 1