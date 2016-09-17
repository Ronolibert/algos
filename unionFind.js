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

  connected (firstNode, secondNode) {
    return this.storage[firstNode] === this.storage[secondNode];
  }

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

