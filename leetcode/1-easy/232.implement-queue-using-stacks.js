/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

const MyQueue = function () {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 * 맨 뒤에 요소를 추가
 */
MyQueue.prototype.push = function (x) {
  this.data.push(x);
};

/**
 * @return {number}
 * 맨 앞 요소를 반환하고 제거(먼저 들어온 데이터가 먼저 나간다.)
 */
MyQueue.prototype.pop = function () {
  return this.data.shift();
};

/**
 * @return {number}
 * 맨 앞 요소를 반환
 */
MyQueue.prototype.peek = function () {
  return this.data[0];
};

/**
 * @return {boolean}
 * 데이터가 비어있는지 확인
 */
MyQueue.prototype.empty = function () {
  return this.data.length === 0;
};

const obj = new MyQueue();
console.log(obj.push(1));
console.log(obj.push(2));
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.empty());

// @lc code=end

