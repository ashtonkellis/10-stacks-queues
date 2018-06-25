'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.tail = newNode;
    return this;
  }

  addFirst(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  removeFirst() {
    if (!this.head) return null;
    
    const firstNode = this.head;
    this.head = firstNode.next;
    if (!this.head) this.tail = null;
    return firstNode;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) return null;

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  insertAfter(value, newValue) {
    if (!this.head) return null;

    const newNode = new Node(newValue);

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
      currentNode = currentNode.next;
    }

    if (currentNode.value === value) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return this;
    }

    return null;
  }

  kthFromEnd(k) {    
    if (!this.head) return null;
    
    let currentNode = this.head;
    let endNode = this.head;

    for (let i = 0; i < k; i++) {
      if (endNode.next === null) return null;
      endNode = endNode.next;
    }

    if (!endNode.next) return currentNode.value;

    while (endNode.next) {
      currentNode = currentNode.next;
      endNode = endNode.next;
      if (!endNode.next) return currentNode.value;
    }

    return null;
  }

  static merge(linkedList1, linkedList2) {
    const mergedLL = new LinkedList();

    while (linkedList1.head || linkedList2.head) {
      if (linkedList1.head) mergedLL.addLast(linkedList1.removeFirst().value);
      if (linkedList2.head) mergedLL.addLast(linkedList2.removeFirst().value);
    }

    return mergedLL;
  }
};
