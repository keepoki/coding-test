/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * GPT-4의 도움을 받았다.
 * 이진 트리로 구성된 루트와 서브 루트가 주어진다. 서브루트 구조와 노드 값이 같은
 * 루트의 서브트리가 있으면 true, 없으면 false를 반환해야 한다.
 *
 * 어떻게 풀어갈지 막막했는데, 풀이를 보니 바로 이해가 되더라.
 * 결국은 root의 노드 하나하나 서브트리랑 비교하는 수 밖에 없다.
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  if (!root) return false;

  if(isSameTree(root, subRoot)) {
    return true;
  };

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/**
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @returns {boolean}
 */
const isSameTree = (a, b) => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val !== b.val) return false;

  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}

// @lc code=end

