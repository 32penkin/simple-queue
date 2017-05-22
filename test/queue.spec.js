const Node = require('../src/node');
const Queue = require('../src/queue');

describe('Queue', () => {
  describe('#constructor', () => {
    const qu = new Queue();

    it('assigns 0 to this.size', () => {
      expect(qu.size).to.equal(0);
    });

    it('assigns null to this.head', () => {
      expect(qu.first).to.equal(null);
    });
  });

});