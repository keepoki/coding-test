/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if (!root.left && !root.right) return true;
  return symmetric(root.left, root.right);
};
/**
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {boolean}
 */
function symmetric(a, b) {
  // a 와 b가 둘다 null 이면 같은 것이기 때문에 true, 둘 중 하나만 null이면 false
  if (a == null || b == null) return a == b;
  // a 노드의 값과, b 노드의 값이 다르면 false
  if (a.val != b.val) return false;
  // 하위 노드를 계속 탐색
  return symmetric(a.left, b.right) && symmetric(a.right, b.left);
}
// @lc code=end

/*
  * 풀이에 실패하여 다른 사람의 풀이를 분석
  조건식에 막혔었다. symmetric(a.left, b.right) && symmetric(a.right, b.left)
  처럼 탐색하는 방법은 같았으나, a.val === b.val에 대한 리턴이 true인 경우
  하위 노드를 탐색하지 않는 문제로 고민하였지만 답이 나오지 않아 다른 사람의 풀이를
  참고하여 풀었다. 막상 다른 사람들의 풀이를 보니 단번에 이해가 되었다.
*/

/**
 * * 다른 사람의 풀이 *
 * 위 풀이와 크게 다르지 않지만, 좀 더 의미를 파악하기는 쉬운 코드이다.
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {boolean}
 */
function symmetric2(a, b) {
  if (a == null && b == null) return true;
  if (a == null || b == null) return false;
  return a.val === b.val && symmetric(a.left, b.right) && symmetric(a.right, b.left);
}

