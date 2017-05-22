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



});