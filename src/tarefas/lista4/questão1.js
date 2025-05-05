class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heap.sort((a, b) => a - b);  
    }
  
    extractMin() {
      return this.heap.shift();  
    }
  
    peek() {
      return this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  }
  
  module.exports = MinHeap;
  