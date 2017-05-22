const Node = require('./node');

class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  enqueue(data) {
    if (data == undefined) throw 'Data is undefined!';
    let node = new Node(data);
    let currentNode = this.first;

    if(this.size == 0) {
      this.first = node;
      this.size++
    } else {
      while (currentNode.next) currentNode = currentNode.next;
      currentNode.next = node;
      this.size++;
    }
  }

  dequeue() {

  }

  getFirst() {

  }

  getSize() {

  }

}

module.exports = Queue;