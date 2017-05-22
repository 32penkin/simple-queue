const Node = require('../src/node');
const Queue = require('../src/queue');

describe('Queue', () => {
  describe('#constructor', () => {
    const qu = new Queue();

    it('assigns 0 to this.size', () => {
      expect(qu.size).to.equal(0);
    });

    it('assigns null to this.first', () => {
      expect(qu.first).to.equal(null);
    });
  });

  describe('#enqueue', () => {
    const qu = new Queue();

    qu.enqueue('node1');
    qu.enqueue('node2');
    qu.enqueue('node3');

    it('assigns 3 to this.size', () => {
      expect(qu.size).to.equal(3);
    });

    it('assigns node1 to this.first', () => {
      expect(qu.first.data).to.equal('node1');
    });

    it('verify the correctness of data)', () => {
      expect(() => {
        qu.enqueue(undefined);
      }).to.throw();
    });
  });

  describe('#dequeue', () => {
    const qu = new Queue();
    const qu2 = new Queue();

    qu.enqueue('node1');
    qu.enqueue('node2');
    qu.enqueue('node3');

    it('assigns 2 to this.size', () => {
      qu.dequeue();
      expect(qu.size).to.equal(2);
    });

    it('assigns node2 to this.first', () => {
      expect(qu.first.data).to.equal('node2');
    });

    it('instanceof', () => {
      expect(qu.dequeue()).to.be.an.instanceof(Node);
    });

    it('assigns fully popped stack', () => {
      qu.dequeue();
      qu.dequeue();
      qu.dequeue();
      qu.dequeue();
      expect(qu.size).to.equal(0);
      expect(qu.first).to.equal(null);
    });

    it('check an empty stack', () => {
      qu2.dequeue();
      expect(qu2.size).to.equal(0);
      expect(qu2.first).to.equal(null);
    });
  });


});