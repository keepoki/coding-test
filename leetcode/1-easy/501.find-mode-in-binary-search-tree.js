
/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
 */

// @lc code=start
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 중복 값을 허용하는 이진 탐색 트리로 구성되어 있다.
 * 왼쪽과 오른쪽 값에 같은 값이 존재할 수 있다.
 * 등장 횟수가 가장 많은 값들을 찾아서 배열로 반환하는 문제이다.
 * 1. 중위 순회를 하면 오름차순 정렬된 값을 구할 수 있다.
 * 2. 등장 횟수를 카운트 하고, 최대 등장 횟수를 찾는다.
 * 3. 최대 등장 횟수에 해당하는 숫자들을 찾아서 반환한다.
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = function (root) {
  const obj = {};
  const inOrderSearch = (node) => {
    if (!node) return;

    if (!node.left && !node.right) {
      // 자식 노드가 없는 잎 노드(단말 노드)인 경우 탐색을 끝내고 데이터를 추가
      obj[node.val] = (obj[node.val] || 0) + 1;
      return;
    }

    // 중위 순회 순서인 left -> root -> right 순으로 탐색한다.
    inOrderSearch(node.left);
    obj[node.val] = (obj[node.val] || 0) + 1;
    inOrderSearch(node.right);
  }

  inOrderSearch(root);

  const maxCount = Math.max(...Object.values(obj));
  const result = Object.keys(obj).filter((key) => obj[key] === maxCount);

  return result.map(Number);
};
// @lc code=end

/**
 * GPT-4o의 풀이, 탐색을 한 번만 하기 때문에 처리 속도가 빠르다.
 * 중위 순회 방식은 같으나 탐색 과정에서 값을 비교하여 처리하는 것이 다르다.
 * 1. 현재 노드 값과 이전 값을 비교하여 같으면 횟수를 증가시키고,
 * 다르면 현재 노드 값을 갱신하고 횟수를 1로 초기화 한다.
 * 2. 현재 횟수와 최대 횟수를 비교하여 현재 횟수가 더 크면 배열을 재할당 하고,
 * 같으면 배열에 데이터를 추가한다.
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode2 = function (root) {
  let current = null;
  let count = 0;
  let maxCount = 0;
  let modes = [];

  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);

    // 현재 노드 값과 이전 값 비교
    if (node.val === current) {
      count++;
    } else {
      current = node.val;
      count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
      modes = [node.val];
    } else if (count === maxCount) {
      modes.push(node.val);
    }

    inorder(node.right);
  };

  inorder(root);
  return modes;
};