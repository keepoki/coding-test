/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
  // root가 [], targetSum이 0인 경우
  if(!root && targetSum == 0) return false;

  // 현재 노드가 null
  if (!root) return targetSum == 0;

  // 현재 노드의 값을 targetSum에서 뺀다.
  targetSum -= root.val;

  // 잎 노드인지 확인한다.
  if (!root.left && !root.right) {
    return targetSum == 0;
  }
  
  // 왼쪽과 오른쪽 서브트리를 재귀적으로 확인한다.
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
// @lc code=end

/*
  * 풀이에 실패하여 뤼튼의 풀이를 분석
  반대로 잎 노드를 찾아서 역으로 더하면서 찾는 방법을 생각하며 풀고 있었는데,
  풀이를 보고 나니 굳이 그럴 필요가 없었다는 것을 깨달았다. 찾아가면서 빼버리면
  한 번의 탐색으로 더 효율적으로 찾을 수 있다.
 */