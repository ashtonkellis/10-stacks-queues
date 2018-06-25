'use strict';

const LinkedList = require('../lib/linked-list/linked-list');

describe('LinkedList #addLast', () => {
  let testLL;

  beforeEach(() => {
    testLL = new LinkedList();
  });

  afterEach(() => {
    testLL = null;
  });
  
  test('#addLast: simple case', () => {
    testLL.addLast(1);
    testLL.addLast(2);
    testLL.addLast(3);
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(3);
    expect(testLL.tail.value).toBe(3);
  });

  test('#addLast: returns instance of linked list', () => {
    expect(testLL.addLast(1)).toBeInstanceOf(LinkedList);
  });
});

describe('LinkedList #addFirst', () => {
  let testLL;
  
  beforeEach(() => {
    testLL = new LinkedList();
  });

  afterEach(() => {
    testLL = null;
  });
  
  test('#addFirst: simple case', () => {
    testLL.addFirst(3);
    testLL.addFirst(2);
    testLL.addFirst(1);
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(3);
  });
});

describe('Linked List #removeFirst', () => {
  let testLL;

  beforeEach(() => {
    testLL = new LinkedList();
    testLL.addLast(1);
    testLL.addLast(2);
    testLL.addLast(3);
  });

  afterEach(() => {
    testLL = null;
  });

  test('#removeFirst: simple case', () => {
    expect(testLL.removeFirst().value).toBe(1);
    expect(testLL.removeFirst().value).toBe(2);
    expect(testLL.removeFirst().value).toBe(3);
    expect(testLL.tail).toBeNull();
  });
});

describe('LinkedList #insertBefore', () => {
  let testLL;

  beforeEach(() => {
    testLL = new LinkedList();
  });

  afterEach(() => {
    testLL = null;
  });
  
  test('#insertBefore: happy path', () => {
    testLL.addLast(1);
    testLL.addLast(2);
    testLL.addLast(3);
    testLL.insertBefore(3, 10);
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(10);
    expect(testLL.head.next.next.next.value).toBe(3);
  });

  test('#insertBefore: short linked list', () => {
    testLL.addLast(1);
    testLL.insertBefore(1, 0);
    expect(testLL.head.value).toBe(0);
    expect(testLL.head.next.value).toBe(1);
  });

  test('#insertBefore: returns instance of linked list', () => {
    testLL.addLast(1);
    expect(testLL.insertBefore(1, 0)).toBeInstanceOf(LinkedList);
  });

  test('#insertBefore: returns null if list is empty', () => {
    expect(testLL.insertBefore(1)).toBeNull();
  });

  test('#insertBefore: returns null if no node with value exists', () => {
    testLL.addLast(1);
    testLL.addLast(2);
    testLL.addLast(3);
    expect(testLL.insertBefore(10)).toBeNull();
  });
});

describe('LinkedList #insertAfter', () => {
  let testLL;

  beforeEach(() => {
    testLL = new LinkedList();
  });

  afterEach(() => {
    testLL = null;
  });
  
  test('#insertAfter: simple case', () => {
    testLL.addLast(1);
    testLL.addLast(2);
    testLL.addLast(3);
    testLL.insertAfter(2, 10);
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(10);
    expect(testLL.head.next.next.next.value).toBe(3);
  });

  test('insertAfter: insert after last node works', () => {
    testLL.addLast(1);
    testLL.addLast(2);
    testLL.addLast(3);
    testLL.insertAfter(3, 10);
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(3);
    expect(testLL.head.next.next.next.value).toBe(10);
  });

  test('#insertAfter: null on insert into empty list', () => {
    expect(testLL.insertAfter(1, 0)).toBeNull();
  });

  test('#insertAfter: returns instance of linked list', () => {
    testLL.addLast(1);
    expect(testLL.insertAfter(1)).toBeInstanceOf(LinkedList);
  });

  test('#insertAfter: returns null if value does not exist', () => {
    testLL.addLast(1);
    expect(testLL.insertAfter(10, 10)).toBeNull();
  });
});

describe('LinkedList #kth-from-end', () => {
  let testLL;

  beforeEach((() => {
    testLL = new LinkedList();
    for (let i = 1; i <= 5; i++) {
      testLL.addLast(i);
    }
  }));

  afterEach(() => {
    testLL = null;
  });

  test('#kthFromEnd', () => {
    expect(testLL.kthFromEnd(0)).toBe(5);
    expect(testLL.kthFromEnd(2)).toBe(3);
    expect(testLL.kthFromEnd(4)).toBe(1);
  });

  test('#kthFromEnd: empty list', () => {
    testLL = new LinkedList();
    expect(testLL.kthFromEnd(0)).toBeNull();
  });

  test('kthFromEnd: short list', () => {
    testLL = new LinkedList();
    testLL.addLast(1);
    expect(testLL.kthFromEnd(0)).toBe(1);
  });

  test('kthFromEnd: returns null on over index', () => {
    expect(testLL.kthFromEnd(20)).toBeNull();
  });
});

describe('Linked List #merge', () => {
  let testLL1;
  let testLL2;
  
  beforeEach(() => {

  });

  afterEach(() => {
    testLL1 = null;
    testLL2 = null;
  });

  test('#merge: simple case', () => {
    testLL1 = new LinkedList();
    testLL1.addLast(1);
    testLL1.addLast(3);
    testLL1.addLast(5);

    testLL2 = new LinkedList();
    testLL2.addLast(2);
    testLL2.addLast(4);
    testLL2.addLast(6);
    
    const mergedLL = LinkedList.merge(testLL1, testLL2);
    expect(mergedLL.head.value).toBe(1);
    expect(mergedLL.head.next.value).toBe(2);
    expect(mergedLL.head.next.next.value).toBe(3);
    expect(mergedLL.head.next.next.next.value).toBe(4);
    expect(mergedLL.head.next.next.next.next.value).toBe(5);
    expect(mergedLL.head.next.next.next.next.next.value).toBe(6);
    expect(mergedLL.head.next.next.next.next.next.next).toBeNull();
  });

  test('#merge: empty lists', () => {
    const mergedLL = LinkedList.merge(new LinkedList(), new LinkedList());
    expect(mergedLL.head).toBeNull();
  });
});
