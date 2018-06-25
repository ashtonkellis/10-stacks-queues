'use strict';

const Queue = require('../lib/queue/queue');

describe('Queue #enqueue', () => {
  let testQueue;

  beforeEach(() => {
    testQueue = new Queue();
  });

  afterEach(() => {
    testQueue = null;
  });

  test('#enqueue: simple case', () => {
    testQueue.enqueue(1);
    expect(testQueue.head).toBe(1);
    testQueue.enqueue(2);
    expect(testQueue.head).toBe(1);
  });

  test('enqueue: returns new queue length', () => {
    expect(testQueue.enqueue(1)).toBe(1);
    expect(testQueue.enqueue(1)).toBe(2);
    expect(testQueue.enqueue(1)).toBe(3);
  });
});

describe('Queue #dequeue', () => {
  let testQueue;

  beforeEach(() => {
    testQueue = new Queue();
  });

  afterEach(() => {
    testQueue = null;
  });
  
  test('#dequeue: simple case', () => {
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.dequeue()).toBe(1);
    expect(testQueue.dequeue()).toBe(2);
    expect(testQueue.dequeue()).toBe(3);
  });

  test('#dequeue: returns null on empty queue', () => {
    expect(testQueue.dequeue()).toBeNull();
  });
});

describe('Queue #peek', () => {
  let testQueue;

  beforeEach(() => {
    testQueue = new Queue();
  });

  afterEach(() => {
    testQueue = null;
  });
  
  test('#peek: simple case', () => {
    testQueue.enqueue(1);
    expect(testQueue.peek()).toBe(1);
  });

  test('#peek: returns null on empty queue', () => {
    expect(testQueue.peek()).toBeNull();
  });
});
