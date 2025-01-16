/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/** Definition for singly-linked list. */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  // head가 없거나 다음 노드가 없는 경우
  if (!head || !head.next) {
    return false;
  }

  // node는 객체로 되어있어서 val은 같아도 객체의 메모리 주소는 다르다.
  // 따라서 얕은 복사된 것이 아니라면 데이터는 같은 객체일 수 없다.
  const nodes = [];

  while (head) {
    // nodes에 같은 객체가 있다면 주기가 반복된다는 것이다.
    if (nodes.includes(head)) {
      return true;
    }

    // 같은 객체가 없으면 새로운 객체를 추가한다.
    nodes.push(head);

    // 다음 노드를 탐색한다.
    head = head.next;
  }

  return false;
};
// @lc code=end

