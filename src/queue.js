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
    let temp = this.first;

    if(this.size == 0) {
      return null;
    } else {
      this.first = this.first.next;
      this.size--;
      return temp;
    }
  }

  getFirst() {

  }

  getSize() {

  }

}

module.exports = Queue;