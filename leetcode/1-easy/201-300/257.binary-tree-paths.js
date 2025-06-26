/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 * 이진 트리의 경로를 기록하여 반환하는 함수이다.
 */
const binaryTreePaths = function (root) {
  // AI Claude-3.5-sonnet의 풀이
  const result = [];
  
  function dfs(node, path) {
    if (!node) return;
    
    // 현재 노드의 값을 경로에 추가
    const currentPath = path ? `${path}->${node.val}` : `${node.val}`;
    
    // 리프 노드인 경우 결과 배열에 추가
    if (!node.left && !node.right) {
      result.push(currentPath);
      return;
    }
    
    // 왼쪽과 오른쪽 자식 노드로 재귀 호출
    dfs(node.left, currentPath);
    dfs(node.right, currentPath);
  }
  
  dfs(root, '');
  return result;
};

// @lc code=end


// 실패한 코드, 2가지 경로만 탐색하여 실패
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePathsFailed = function (root) {
  if (!root) return [];

  if (!root.left && !root.right) {
    return [`${root.val}`];
  }

  const result = [];
  let leftNodePath = '';
  if (root.left) {
    leftNodePath = traversal(root.left, `${root.val}`);
    result.push(leftNodePath);
  }

  let rightNodePath = '';
  if (root.right) {
    rightNodePath = traversal(root.right, `${root.val}`);
    result.push(rightNodePath);
  }

  return result;
};

/**
 * @param {TreeNode} node
 * @param {string} result
 * @returns {string}
 */
function traversal(node, result) {
  if (!node) return result;

  result += `->${node.val}`;

  result = traversal(node.left, result);
  result = traversal(node.right, result);

  return result;
}

