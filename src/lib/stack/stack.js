'use strict';

const LinkedList = require('../linked-list/linked-list');

module.exports = class Stack {
  constructor() {
    this.stack = new LinkedList();
    this.top = null;
    this.length = 0;
  }

  push(value) {
    this.length += 1;
    this.stack.addFirst(value);
    this.top = this.stack.head.value;
    
    return this.length;
  }

  pop() {
    if (!this.stack.head) return null;
    this.length -= 1;

    const poppedValue = this.stack.removeFirst().value;
    this.top = this.stack.head.value;

    return poppedValue;
  }

  peek() {
    return this.top;
  }
};
