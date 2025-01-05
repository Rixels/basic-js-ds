const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class Queue {
  constructor() {
    this.begin = null;
    this.last = null;
  }
  static ListQueue = class {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  };
  getUnderlyingList() {
    return this.begin;
  }
  enqueue(value) {
    const newElem = new Queue.ListQueue(value); 
    if (!this.last) {
      this.begin = this.last = newElem;
    } else {
      this.last.next = newElem;
      this.last = newElem;
    }
  }
  dequeue() {
    if (!this.begin) return null;
    const agedItem = this.begin.value;
    this.begin = this.begin.next;
    if (!this.begin) this.last = null;
    return agedItem;
  }
}
module.exports = {
  Queue
};
