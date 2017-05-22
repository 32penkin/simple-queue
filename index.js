const Node = require('./src/node');
const Queue = require('./src/queue');

const queue = new Queue();

queue.enqueue('node1');
queue.enqueue('node2');




console.log(queue.dequeue());


