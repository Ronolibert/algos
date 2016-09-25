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

class ArrayStack {
  constructor () {
    this.storage = [];
    this.size = 0;
  }

  isEmpty () {
    return this.storage.length === 0;
  }

  push (value) {
    this.storage.push(value);
    this.size++;
  }

  pop () {
    if (!this.storage.length) {
      return;
    }
    let tenp = this.storage[this.storage.length - 1];
    delete this.storage[this.storage.length - 1];
    this.size--;
    return temp;
  }

  size () {
    return this.size;
  }

}