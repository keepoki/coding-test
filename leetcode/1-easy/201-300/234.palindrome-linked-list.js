/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  if (!head) return false;

  const array = [];
  // 우선 단일 연결 노드는 다음 노드 밖에 모르기 때문에 배열에 담는다.
  while (head) {
    array.push(head.val);
    head = head.next;
  }

  // 배열을 순회하여 맨 앞 데이터와 맨 뒤 데이터를 비교한다. 일치하지 않으면 좌우 반전이 아니다.
  const length = array.length;
  const halfLength = length / 2;
  for (let i = 0; i < halfLength; i++) {
    if (array[i] !== array[length - 1 - i]) {
      return false;
    }
  }

  return true;
};
// @lc code=end

console.log(isPalindrome(arrayToListNode([1, 2, 2, 1]))); // true
console.log(isPalindrome(arrayToListNode([1, 2]))); // false
console.log(isPalindrome(arrayToListNode([1]))); // true

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