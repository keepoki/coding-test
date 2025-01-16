/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * @param {TreeNode?} left
 * @param {TreeNode?} right
 * @param {number?} val
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  const result = [];

  /** @param {TreeNode} node */
  function inorder(node) {
    if (node == null) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }

  inorder(root);
  return result;
};
// @lc code=end

/**
 * inorder는 Left -> Node -> Right 순서다.
 * 탐색 시작 위치가 맨 왼쪽이다.
 *    4
 *  2   5
 * 1  3
 */

/**
 * 다른 사람의 풀이
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal2(root) {
  const stack = [];
  const result = [];

  while (root || stack.length > 0) {
    if (root) {
      // 가장 왼쪽 노드를 찾아 가면서 지나친 노드를 스택에 쌓는다
      stack.push(root);
      root = root.left;
    } else {
      // 스택에서 마지막 노드(가장 최근에 왼쪽으로 방문한 노드)를 받아온다.
      root = stack.pop();

      // 현재 노드의 값을 배열에 추가
      result.push(root.val);

      // 우측 노드를 탐색한다.
      root = root.right;
    }
  }

  return result;
}

