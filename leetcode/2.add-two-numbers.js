/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * @param {number} val
 * @param {ListNode?} next
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let currentL1 = l1, currentL2 = l2, rest = 0;
  const headNode = new ListNode();
  let currentNode = headNode;
  let val1, val2, sum;

  while(currentL1 || currentL2) {
    val1 = currentL1 ? currentL1.val : 0;
    val2 = currentL2 ? currentL2.val : 0;
    sum = val1 + val2 + rest;

    rest = Math.floor(sum / 10);
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;

    if (currentL1) currentL1 = currentL1.next;
    if (currentL2) currentL2 = currentL2.next;
  }

  if (rest > 0) {
    currentNode.next = new ListNode(rest);
  }

  return headNode.next;
};

// @lc code=end

/*
  음이 아닌 정수로 이루어진 연결된 노드 두개가 주어진다.
  숫자들은 역순으로 저장되고 각각의 노드는 한 자리의 숫자를 가진다.
  두 숫자를 더하고 합을 연결된 노드로 만들어서 리턴한다.
  [2->4->3] + [5->6->4] => 342 + 465 = 807 => [7->0->8]
 */

// vfyodorov님의 풀이, 재귀를 활용한 심플한 풀이!
const addTwoNumbers2 = function (l1, l2) {
  const iter = (n1, n2, rest = 0) => {
    if (!n1 && !n2 && !rest) return null;
    const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
    const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
    return new ListNode(newVal % 10, nextNode);
  }
  return iter(l1, l2);
};

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
let numbers;
numbers = addTwoNumbers(arrayToListNode([2,4,3]), arrayToListNode([5,6,4]));
console.log(ListNodeToArray(numbers)); // [ 7, 0, 8 ]
numbers = addTwoNumbers(arrayToListNode([9,9,9,9,9,9,9]), arrayToListNode([9,9,9,9]));
console.log(ListNodeToArray(numbers)); // [ 8, 9, 9, 9, 0, 0, 0, 1 ]
numbers = addTwoNumbers(arrayToListNode([2,4,9]), arrayToListNode([5,6,4,9]));
console.log(ListNodeToArray(numbers)); // [ 7, 0, 4, 0, 1 ]

