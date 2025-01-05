const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this.head;
    while (current !== null) {
      if (data === current.data) {
        return true;
      }
      current = data > current.data ? current.right : current.left;
    }
    return false;
  }

  find(data) {
    let current = this.head;
    while (current !== null) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  remove(data) {
    this.head = this._removeNode(this.head, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      node.data = this._findMin(node.right).data;
      node.right = this._removeNode(node.right, node.data);
      return node;
    }
  }
  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (this.head === null) {
      return null;
    }
    let current = this.head
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this.head === null) {
      return null;
    }
    let current = this.head
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};