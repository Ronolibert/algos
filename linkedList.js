class LinkedList {
  constructor (val) {
    this.head = val ? new Node(val) : null;
    this.tail = this.head;
  }

  addToTail (val) {
    let tailNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = tailNode;
    } else {
      this.tail.next = tailNode;
      this.tail = tailNode;
    }
  }

  addToHead (val) {
    let headNode = new Node(val);
    headNode.next = this.head;
    this.head = headNode;
  }

  contains (val) {
    let current = this.head;

    while (current) {
      if (current.value === val) {
        return true;
      } else {
        current = current.next;
      }
    }

    return false;
  }

  indexOf (val) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      } else {
        current = current.next;
        index++;
      }
    }

    return -1;
  }

  insertAfter (node, val) {
    let current = this.head;
    let nodeToInsert = new Node(val);

    while (current) {
      if (current.value === node.value) {
        nodeToInsert.next = current.next;
        current.next = nodeToInsert;
        return;
      } else {
        current = current.next;
      }
    }
  }

  removeAfter (node) {
    let current = this.head;

    while (current) {
      if (current.value === node.value) {
        current.next = current.next.next;
        return;
      } else {
        current = current.next;
      }
    }
  }

  removeDuplicates () {
    let obj = {};
    let current = this.head;
    let previous = null;

    while (current) {
      if (obj[current.value]) {
        previous.next = current.next;
      } else {
        obj[current.value] = 1;
        previous = current;
      }
      current = current.next;
    }
  }

  removeDuplicatesConstantSpace () {
    let current = this.head;
    let runner;

    while (current) {
      runner = current;
      while (runner.next) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }

  nthToLastElement (n) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (index === n - 1) {
        return current.value;
      } else {
        current = current.next;
        index++;
      }
    }
  }

  makeLinkedListRange (from, to) {
    for (let i = from; from <= to; from++) {
      this.addToTail(from);
    }
    return this;
  }

  printKthToLast(head, k) {
    if (head === null) {
      return 0;
    }

    let index = printKthToLast(head.next, k) + 1;
    if (index === k) {
      console.log(k + 'th to last node is ' + head.value);
    }

    return index;
  }

}

class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
  }
}

