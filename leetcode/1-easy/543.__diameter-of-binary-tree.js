/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * GPT-4o의 도움을 받았다.
 * 이진 트리의 두 노드 사이에서 가장 긴 경로의 길이를 반환해야하는 문제이다.
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  let maxDiameter = 0;
  const dfs = (node) => {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    return Math.max(left, right) + 1;
  };

  dfs(root)
  return maxDiameter;
};
// @lc code=end


/**
 * 106개의 테스트 케이스 중 103에서 막힌 실패한 코드
 * GPT가 말하는 문제점
 * 1. 루트를 지나는 경로만 고려하였다.
 * 2. 전체 트리를 순회하면서 지름을 갱신하지 않았다.
 * @param {TreeNode} root
 * @return {number}
 */
const failed_diameterOfBinaryTree = (root) => {
  let leftHeight = 0
  let rightHeight = 0;
  
  const traversal = (node) => {
    if (!node) return height;
    return Math.max(traversal(node.left, height + 1), traversal(node.right, height + 1));
  };

  leftHeight = traversal(root.left, 0);
  rightHeight = traversal(root.right, 0);
  return leftHeight + rightHeight;
};

