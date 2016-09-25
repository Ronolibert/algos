class Node {
  constructor (value) {
    this.item = value;
    this.next = null;
  }
}

class LinkedStack {
  constructor (value) {
    this.first = value ? new Node(value) : null;
  }

  isEmpty () {
    return this.first === null;
  }

  push (value) {
    let oldFirst = this.first;
    this.first = new Node(value);
    this.first.next = oldFirst;
  }

  pop () {
    let lastString = this.first.item;
    this.first = this.next;
    return lastString;
  }
}