/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * @param {number?} val
 * @param {TreeNode?} left
 * @param {TreeNode?} right
 * */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  // p와 q 모두 null이라면 같은 것이다.
  if (p == null && q == null) return true;
  // p또는 q 중 하나만 null이면 서로 다르다. 또한 값이 같지 않은 경우
  if (p == null || q == null || p.val != q.val) return false;
  // 같은 잎노드를 계속해서 탐색한다.
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end

/**
 * 다른 사람의 풀이, 재귀가 아닌 다른 방식의 풀이
 * @param {TreeNode} p
 * @param {TreeNode} q
 */
function isSameTree2(p, q) {
  const queue = [p, q];
  let a, b;
  while (queue.length > 0) {
    a = queue.shift();
    b = queue.shift();
    if (a == null && b == null) {
      continue;
    } else if (a == null || b == null || a.val != b.val) {
      return false;
    }
    queue.push(a.left);
    queue.push(b.left);
    queue.push(a.right);
    queue.push(b.right);
  }
  return true;
}
