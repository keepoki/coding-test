/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start

const MyStack = function() {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.data.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.data.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  let result = null;
  for(let i = 0; i < this.data.length; i++) {
    const data = this.data[i];
    if (data) {
      result = data;
    }
  }

  return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.data.length == 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 */
const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(2);
myStack.top();
myStack.pop();
myStack.top();
myStack.empty();
// @lc code=end

