class Node {
  constructor (value) {
    this.item = value;
    this.next = null;
  }
}

class LinkedQueue {
  constructor (value) {
    this.first = value ? new Node(value) : null;
    this.last = this.first;
  }

  isEmpty () {
    return this.first === null;
  }

  enqueue (value) {
    let oldLast = this.last;
    this.last = new Node(value);
    this.last.next = null;
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }
  }

  dequeue () {
    let temp = this.first.item;
    this.first = this.first.next;
    if (this.isEmpty()) {
      this.last = null;
    } else {
      return temp;
    }
  }
}
