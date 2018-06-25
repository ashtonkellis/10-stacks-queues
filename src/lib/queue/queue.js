'use strict';

const LinkedList = require('../linked-list/linked-list');

module.exports = class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.length = 0;
  }

  enqueue(value) {
    this.length += 1;
    this.queue.addLast(value);
    this.head = this.queue.head.value;

    return this.length;
  }

  dequeue() {
    if (!this.queue.head) return null;
    
    this.length -= 1;
    const dequeuedValue = this.queue.removeFirst().value;
    return dequeuedValue;
  }

  peek() {
    if (!this.queue.head) return null;
    
    return this.queue.head.value;
  }
};
