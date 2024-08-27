/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

/**
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  if (list1 == null && list2 == null) {
    return null;
  }

  let result = new ListNode(0, null);
  const first = result;

  while (list1 != null || list2 != null) {
    if (list1 != null && list2 == null) {
      result.val = list1.val;
      list1 = list1.next;
    } else if (list2 != null && list1 == null) {
      result.val = list2.val;
      list2 = list2.next;
    } else if (list1.val < list2.val) {
      result.val = list1.val;
      list1 = list1.next;
    } else if (list1.val > list2.val) {
      result.val = list2.val;
      list2 = list2.next;
    } else if (list1.val == list2.val) {
      result.val = list1.val;
      result.next = new ListNode(list2.val, null);
      result = result.next;
      list1 = list1?.next;
      list2 = list2?.next;
    }

    if ((list1 || list2) && !result.next) {
      result.next = new ListNode(0, null);
    }

    result = result.next;
  }

  return first;
};
// @lc code=end

const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
mergeTwoLists(list1, list2);
// mergeTwoLists(new ListNode(2, null), new ListNode(1, null));

/**
 * 재귀호출 방식으로 처리한다면 인자로 넘어오는 원본 데이터의 참조 값의 변경이 일어난다.
 * 실무에서 원본 데이터 변경을 지양하기 때문에 원본 데이터의 변경 없는 방식으로 풀어나갔다.
 */

/**
 * 다른 사람의 풀이
 * https://leetcode.com/problems/merge-two-sorted-lists/solutions/9715/java-1-ms-4-lines-codes-using-recursion/?source=vscode
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
*/
function mergeTwoLists2(list1, list2){
  if (list1 == null) return list2;
  if (list2 == null) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

const mergeList = mergeTwoLists2(list1, list2);

const d = 3 ;