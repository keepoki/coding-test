/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  if (!head) return head;
  
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }

  array.reverse();

  const newHead = new ListNode(array[0], null);
  let newNode = newHead;
  for (let i = 1; i < array.length; i++) {
    newNode.next = new ListNode(array[i], null);
    newNode = newNode.next;
  }

  return newHead;
};


/*
  나의 풀이는 빠르게 풀었지만, 불필요한 데이터와 불필요한 처리를 하고 있다.
  AI의 풀이, 버블 정렬 방식으로 훨씬 깔끔하고 간결한 풀이이다.
*/
const reverseList02 = function (head) {
  if (!head) return head;

  let prev = null;
  let current = head;

  while (current) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}
// @lc code=end

console.log(reverseList(arrayToListNode([1,2,3,4,5])));
console.log(reverseList02(arrayToListNode([1,2,3,4,5])));


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