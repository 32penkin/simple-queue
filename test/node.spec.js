const Node = require('../src/node');

describe('Node', () => {
  describe('#constructor', () => {
    const node1 = new Node('node1');
    const node2 = new Node('node2');

    node1.next = node2;

    it('assigns node2 to this.prev', () => {
      expect(node1.next).to.equal(node2);
    });

    it('assigns node2.prev to null', () => {
      expect(node2.next).to.equal(null);
    });

    it('assigns data of node1 to "node1"', () => {
      expect(node1.data).to.equal('node1');
    });

    it('assigns data of node2 to "node2"', () => {
      expect(node2.data).to.equal('node2');
    });
  });

});