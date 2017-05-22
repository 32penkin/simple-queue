const Node = require('./src/node');
const Queue = require('./src/queue');

const qu1 = new Queue();

qu1.enqueue('node1');
qu1.enqueue('node2');
qu1.enqueue('node3');
qu1.enqueue('node4');

console.log(qu1);
console.log('----------------------');
console.log(qu1.first);
