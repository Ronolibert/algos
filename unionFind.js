// Cons: too expesive, takes N^2 array accesses to process sequence of N union commands to N objects
class QuickFindUF {
  constructor (n) {
    // dynamically make the storage array based on value given during instantiation
    this.storage = (() => {
      let arr = [];
      for (var i = 0; i < n; i++) {
        arr[i] = i;
      }
      return arr;
    })();
  }
  // check whether first and second node are same value meaning they are connected
  connected (firstNode, secondNode) {
    return this.storage[firstNode] === this.storage[secondNode];
  }

  // change all instances of first node to second node to connect them
  unite (firstNode, secondNode) {
    let firstNodeValue = this.storage[firstNode];
    let secondNodeValue = this.storage[secondNode];

    for (var i = 0; i < this.storage.length; i++) {
      if (this.storage[i] === firstNodeValue) {
        this.storage[i] = secondNodeValue;
      }
    }
  }
}

// too costly when finding roots
class QuickUnionUF {
  constructor (n) {
    this.storage = (() => {
      let arr = [];
      for (var i = 0; i < n; i++) {
        arr[i] = i;
      }

      return arr;
    })();
  }

  // find the root of this value
  root (value) {
    while (value !== this.storage[value]) {
      value = this.storage[value];
    }

    return value;
  }

  // compare roots to determine if connected
  connected (firstNode, secondNode) {
    return this.root(firstNode) === this.root(secondNode);
  }

  // set the index of the first node's root to be the second node's root;
  unite (firstNode, secondNode) {
    let firstNodeRoot = this.root(firstNode);
    let secondNodeRoot = this.root(secondNode);

    this.storage[firstNodeRoot] = secondNodeRoot;
  }
}

