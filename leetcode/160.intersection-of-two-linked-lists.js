/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/** Definition for singly-linked list. */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
  const headAList = [];

  // head A가 되었든 B가 되었든 하나의 노드 링크의 모든 데이터를 배열에 저장
  while (headA != null) {
    headAList.push(headA);
    headA = headA.next;
  }

  while (headB != null) {
    // 저장된 노드 링크에 같은 것이 있으면 교차점이므로 해당 데이터를 리턴
    const sameNode = headAList.find(ele => ele === headB)
    if (sameNode) {
      return sameNode;
    }

    headB = headB.next;
  }

  // 교차 지점이 없으면 null을 리턴
  return null;
};
// @lc code=end

