const Node = require('./src/node');
const Queue = require('./src/queue');

const qu1 = new Queue();

qu1.enqueue('node1');
qu1.enqueue('node2');
qu1.enqueue('node3');
qu1.enqueue('node4');

qu1.dequeue();
qu1.dequeue();
qu1.dequeue();
qu1.dequeue();

console.log(qu1);


