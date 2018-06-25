'use strict';

const Stack = require('../lib/stack/stack');

describe('Stack #push', () => {
  let testStack;

  beforeEach(() => {
    testStack = new Stack();
  });

  afterEach(() => {
    testStack = null;
  });

  test('#push: simple case', () => {
    testStack.push(1);
    expect(testStack.top).toBe(1);
    testStack.push(2);
    expect(testStack.top).toBe(2);
    testStack.push(3);
    expect(testStack.top).toBe(3);
  });

  test('#push: returns length of new stack', () => {
    expect(testStack.push(1)).toBe(1);
    expect(testStack.push(1)).toBe(2);
    expect(testStack.push(1)).toBe(3);
  });
});

describe('Stack #pop', () => {
  let testStack;

  beforeEach(() => {
    testStack = new Stack();
  });

  afterEach(() => {
    testStack = null;
  });

  test('#pop: simple case', () => {
    testStack.push(3);
    testStack.push(2);
    testStack.push(1);
    expect(testStack.pop()).toBe(1);
    expect(testStack.top).toBe(2);
    expect(testStack.pop()).toBe(2);
    expect(testStack.top).toBe(3);
  });

  test('#pop: returns null on empty stack', () => {
    expect(testStack.pop()).toBeNull();
  });
});

describe('Stack #peek', () => {
  let testStack;

  beforeEach(() => {
    testStack = new Stack();
  });

  afterEach(() => {
    testStack = null;
  });

  test('#peek: simple case', () => {
    testStack.push(1);
    expect(testStack.peek()).toBe(1);
  });

  test('#peek: returns null on empty stack', () => {
    expect(testStack.peek()).toBeNull();
  });
});
