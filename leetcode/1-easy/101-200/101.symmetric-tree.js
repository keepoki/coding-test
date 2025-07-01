/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 과거에 실패했던 문제에 다시 도전한다.
 *
 * 이진 트리가 주어지는데, 왼쪽 노드와 오른쪽 노드가 대칭을 이루는지 확인해야 한다.
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  // 1. 두 노드를 비교해야 하므로, 노드 두 개를 매개변수로 받는다.
  const dfs = (node1, node2) =>{
    // 2. 탐색이 끝나는 대칭 조건을 확인한다.
    // 두 노드 중 하나라도 null이면 더이상 탐색의 의미가 없다.
    // 2-1. 하지만 둘 다 null이면 대칭이므로 true를 반환한다.
    if (node1 == null && node2 == null) return true;
    // 2-2. 하나만 null인 경우 비대칭이므로 false를 반환한다.
    if (node1 == null || node2 == null) return false;
    // 2-3. 두 노드의 값이 다르면 false를 반환 한다.
    if (node1.val !== node2.val) return false;

    // 3. 나머지 조건인 두 노드의 값이 같으면 계속 해서 탐색한다.
    // 같은 레벨의 노드를 대칭으로 탐색하려면 node1의 왼쪽과 node2의 오른쪽
    // node1의 오른쪽과 node2의 왼쪽 두 쌍을 비교해야 한다.
    // 두 쌍이 모두 같아야 대칭이므로 AND 조건으로 두 탐색을 묶는다.
    return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
  }

  return dfs(root.left, root.right);
};
// @lc code=end

/**
 * 다른 사람의 풀이, 조건문에 리턴을 조건으로 하여 null을 판단한 부분이 조금 다르다.
 * @param {TreeNode} root
 * @return {boolean}
 */
function symmetric2(a, b) {
  // a와 b가 둘다 null 이면 같은 것이기 때문에 true, 둘 중 하나만 null이면 false
  if (a == null || b == null) return a == b;
  // a 노드의 값과, b 노드의 값이 다르면 false
  if (a.val != b.val) return false;
  // 하위 노드를 계속 탐색
  return symmetric(a.left, b.right) && symmetric(a.right, b.left);
}