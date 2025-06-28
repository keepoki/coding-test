/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
function _Node(val, children) {
  this.val = val === undefined ? null : val;
  this.children = children === undefined ? null : children;
}

/**
 * 다진 트리의 최대 깊이를 구하는 문제이다. 초대 깊이는 루트 노드에서 가장 먼 잎 노드까지
 * 가장 긴 경로를 따라 있는 노드의 수이다.
 * @param {_Node|null} root
 * @return {number}
 */
const maxDepth = (root) => {
  let maxDepth = 0;

  const dfs = (node, depth) => {
    if (!node) return;

    maxDepth = Math.max(maxDepth, depth);
    
    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i], depth + 1);
    }
  };

  dfs(root, 1);

  return maxDepth;
};
// @lc code=end

/**
 * GPT-4의 풀이, 비슷하지만, 더 깔끔한 풀이이다.
 * @param {_Node|null} root
 * @return {number}
 */
const maxDepth2 = (root) => {
  if (!root) return 0;

  let depth = 0;

  for (const child of root.children) {
    depth = Math.max(depth, maxDepth(child));
  }

  return depth + 1;
};