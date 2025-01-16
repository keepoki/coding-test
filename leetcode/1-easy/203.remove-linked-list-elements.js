/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  if (!head) {
    return head;
  } else if (!head.next && head.val == val) {
    // [1], 1 같은 경우
    return null;
  } else if(!head.next) {
    // [2], 1 같은 경우
    return head;
  }

  // 새로운 노드를 생성한다.
  let newNode = new ListNode(head.val, null);
  let newHead = newNode;
  let currentNode = head.next;

  // 다음 노드가 있으면 반복하여 탐색한다.
  while (currentNode) {
    // 삭제해야할 데이터가 아니면 새로운 노드에 연결한다.
    if (currentNode.val != val) {
      newNode.next = currentNode;
      newNode = newNode.next;
    }

    currentNode = currentNode.next;
  }

  // 머리의 값이 삭제할 데이터인지 확인하고 다음 노드로 교체한다.
  if (newHead.val == val) {
    newHead = newHead.next;
  }
  
  // 마지막 꼬리의 값이 삭제해야 할 값이면 연결을 끊는다.
  if (newNode.next && newNode?.next.val == val) {
    newNode.next = null;
  }

  return newHead;
};
// @lc code=end

console.log(removeElements(arrayToListNode([1,2,6,3,4,5,6]), 6)); // [1,2,3,4,5]
console.log(removeElements(arrayToListNode([1]), 2)); // [1]
console.log(removeElements(arrayToListNode([1]), 1)); // null


/**
 * 배열을 노드로 변환하는 함수
 * @param {number[]} array
 * @returns {ListNode}
 */
function arrayToListNode(array) {
  if (!array || !(array instanceof Array)) return null;

  const headNode = new ListNode(array[0]);
  let currentNode = headNode;
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    const newNode = new ListNode(element);
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return headNode;
}


