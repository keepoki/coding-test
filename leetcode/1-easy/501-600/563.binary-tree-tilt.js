/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * 기울기는 왼쪽 서브트리의 합 - 오른쪽 서브트리의 합의 절댓 값이다.
 * 전체 노드의 기울기를 더해서 리턴해야 한다.
 * 자식 노드가 하나도 없으면 0이 된다.
 * @param {TreeNode} root
 * @return {number}
 */
const findTilt = (root) => {
  let totalTilt = 0;
  const dfs = (node) => {
    if (!node) return 0;

    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);

    // 기울기 계산
    const tilt = Math.abs(leftSum - rightSum);
    totalTilt += tilt;

    // 서브 트리의 합을 리턴
    return leftSum + rightSum + node.val;
  }

  dfs(root);

  return totalTilt;
};
// @lc code=end
