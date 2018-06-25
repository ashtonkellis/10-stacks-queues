# Lab 10 - Stacks and Queues Data Structures
## Travis Badge
[![Build Status](https://travis-ci.org/ashtonkellis/10-stacks-queues.svg?branch=master)](https://travis-ci.org/ashtonkellis/10-stacks-queues)

## Stacks
### stack.push(value)
O(1) time complexity
O(1) space complexity

### stack.pop()
O(1) time complexity (thanks to a tail property on the linked list class)
O(1) space complexity

### stack.peek()
O(1) time complexity
O(1) space complexity

### example code:
```
const Stack = require('<stack-path>');

const myStack = new Stack();

// .push addes elements to the top of the stack
myStack.push(1); // returns 1 (stack length)
myStack.push(2); // returns 2 (stack length)

// .peek method returns but does nto remove the top element in the stack
myStack.peek(); // returns 2

// .pop method removes the top element in the stack
myStack.pop(); // returns 2
myStack.peek(); // returns 1
myStack.pop(); // returns 1
myStack.peek(); // returns null (empty stack)
myStack.pop(); // returns null (empty stack)
```

## Queues
### .enqueue(value)
O(1) time complexity (due to the tail property of the linked list)
O(1) space complexity

### dequeue()
O(1) time complexity
O(1) space complexity

### peek()
O(1) time complexity
O(1) space complexity

### example code
```
const Queue = require('<queue-path>');

const myQueue = new Queue();

// .enqueue method adds a new element with a given value to the end of the queue and returns the current queue length
myQueue.enqueue(1); // returns 1 (queue length)

// .peek method returns the value of the first element in the queue
myQueue.peek() // returns 1
myQueue.enqueue(2);
myQueue.peek() // returns 1

// .dequee method removes the first element from the beginning of the queue and returns the elements value
myQueue.dequeue(); // returns 1 (first element's value)
myQueue.peek(); // returns 2
myQueue.dequeue() // returns 2 (new first element's value)
myQueue.dequeue() // returns null (empty queue)

```
