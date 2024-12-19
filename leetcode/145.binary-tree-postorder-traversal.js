/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 */

// @lc code=start
/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function(root) {
  const result = [];

  // 루트 노드부터 자식 노드를 후위 탐색(postodrer)하여 배열에 데이터를 추가한다.
  traversal(root, result);

  return result;
};

/**
 * @param {TreeNode} node
 * @param {Array} array
 */
function traversal(node, array) {
  if (!node) return;

  if (!node.left && !node.right) {
    // 자식 노드가 없는 잎 노드(단말 노드)인 경우 탐색을 끝내고 데이터를 추가
    array.push(node.val);
    return;
  }

  // 후위 순회 순서인 left -> right -> root 순으로 탐색한다.
  traversal(node.left, array);
  traversal(node.right, array);
  array.push(node.val);
}
// @lc code=end

