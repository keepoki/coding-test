/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * @param {number} val
 * @param {ListNode?} next
 * */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  let currNode = head;

  while(currNode?.next != null) {
    const nextNode = currNode.next;
    if (currNode.val == nextNode.val) {
      if (nextNode.next != null) {
        // 현재 노드와 다음 노드의 숫자가 같고, 다다음 노드가 있으면
        // 다음 연결 노드는 연결을 건너 뛰고 다다음 노드를 연결시킨다.
        currNode.next = nextNode.next;
      } else {
        // 현재 노드와 마지막 꼬리 노드의 숫자가 같으면 꼬리와 연결을 끊는다.
        currNode.next = null;
      }
    } else {
      // 현재 노드와 다음 노드의 값이 다르다면, 다음 노드를 탐색한다.
      currNode = nextNode;
    }
  }

  return head;
};
// @lc code=end

console.log(ListNodeToArray(deleteDuplicates(arrayToListNode([1,1,2]))));
console.log(ListNodeToArray(deleteDuplicates(arrayToListNode([1,1,2,3,3]))));

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

/**
 * 노드를 배열로 변환하는 함수
 * @param {ListNode} listNode
 * @returns {number[]}
 */
function ListNodeToArray(listNode) {
  const array = [];
  if (!listNode) return array;

  let currentNode = listNode;
  while (currentNode) {
    array.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return array;
}