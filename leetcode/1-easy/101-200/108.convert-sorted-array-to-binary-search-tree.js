/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * 오름차순으로 정렬된 정수 배열이 주어지고, 높이 균형 이진 검색트리로 변환해야 한다.
 * 루트는 가장 가운데 값이고 루트보다 작으면 왼쪽 노드, 크다면 오른쪽 노드로 분류되는데
 * 1차 분류 이후 나머지는 오름차순 또는 내림차순 중에 동일하게 적용되어야 한다.
 *
 * 가운데 값을 기준으로 투 포인터로 탐색 하는 방식이 핵심이라고 생각한다.
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {

  const createTree = (begin, end) => {
    // 1. 탐색이 끝나는 조건
    if (begin > end) return null;

    // 2. 중간 값을 찾고, 기준 노드 생성
    const mid = Math.floor((begin + end) / 2);
    const node = new TreeNode(nums[mid]);

    // 3. 왼쪽 노드 생성
    node.left = createTree(begin, mid - 1);

    // 4. 오른쪽 노드 생성
    node.right = createTree(mid + 1, end);

    // 5. 결과 반환
    return node;
  }

  return createTree(0, nums.length - 1);
};
// @lc code=end

console.log(sortedArrayToBST([0, 1, 2, 3, 4]));
console.log(sortedArrayToBST([-10, -6, -3, 2, 5, 7]));


/**
 * Gemini 2.5 Flash의 설명
 * BST의 속성: BST는 왼쪽 자식 노드의 값은 현재 노드의 값보다 작고,
 * 오른쪽 자식 노드의 값은 현재 노드의 값보다 커야 합니다.
 *
 * 균형 잡힌 트리: 균형 잡힌 트리를 만들기 위해서는 배열의 중앙 값이
 * 트리의 루트 노드가 되어야 합니다. 이렇게 하면 왼쪽 서브트리와
 * 오른쪽 서브트리의 노드 개수가 최대한 비슷해져 트리의 높이가 최소화됩니다.
 *
 * 주어진 nums의 값이 [-10, -6, -3, 2, 5, 7]이라 가정하고 풀이 과정을 알아보자.
 * 풀이 과정이 너무 길어 질 수 있어서 왼쪽 노드만 확인한다.
 *
 * 1. createTree(0, 5) 호출: 배열 전체를 사용하여 루트 노드 생성 시작.
 * 2. mid = 2 (-3): -3을 루트 노드로 생성하고, 왼쪽 자식으로 createTree(0, 1) 호출.
 * 3.createTree(0, 1) 호출: [-10, -6] 배열을 사용하여 -3의 왼쪽 서브트리 생성 시작.
 * 4. mid = 0 (-10): -10을 노드로 생성하고, 왼쪽 자식으로 createTree(0, -1) 호출.
 * 5. createTree(0, -1) 반환: null 반환 (탐색 종료 조건).
 * 6. -10 노드로 돌아와: 오른쪽 자식으로 createTree(1, 1) 호출.
 * 7. createTree(1, 1) 호출: [-6] 배열을 사용하여 -10의 오른쪽 서브트리 생성 시작.
 * 8. mid = 1 (-6): -6을 노드로 생성하고, 왼쪽 자식으로 createTree(1, 0) 호출.
 * 9. createTree(1, 0) 반환: null 반환.
 * 10. -6 노드로 돌아와: 오른쪽 자식으로 createTree(2, 1) 호출.
 * 11. createTree(2, 1) 반환: null 반환.
 *
 * 모든 노드 생성을 수행한 결과는 아래와 같다.
 *      -3
 *     /  \
 *   -10   5
 *     \  / \
 *     -6 2  7
 */