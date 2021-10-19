class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let currNode = this.root;
    while (true) {
      if (val < currNode.val) {
        if (currNode.left === null) {
          currNode.left = new Node(val);
          return this;
        } else {
          currNode = currNode.left;
        } 
      } else if (val > currNode.val) {
        if (currNode.right === null) {
          currNode.right = new Node(val);
          return this;
        } else {
          currNode = currNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < currNode.val) {
      if (currNode.left === null) {
        currNode.left = new Node(val);
        return this;
      }

      return this.insertRecursively(val, currNode.left);
    } else {
      if (currNode.right === null) {
        currNode.right = new Node(val);
        return this;
      }

      return this.insertRecursively(val, currNode.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    let found = false;

    if (val === currNode.val) return currNode;

    while (currNode && !found) {
      if (val < currNode.val) {
        currNode = currNode.left;
      } else if (val > currNode.val) {
        currNode = currNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return currNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
    if (!this.root) return undefined;

    if (val < currNode.val) {
      if (!currNode.left) return undefined;
      return this.findRecursively(val, currNode.left);
    } else if (val > currNode.val) {
      if (!currNode.right) return undefined;
      return this.findRecursively(val, currNode.right);
    }

    return currNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let nodesArr = [];
    let currNode = this.root;

    const traverse = node => {
      nodesArr.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(currNode);
    return nodesArr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let nodesArr = [];
    let currNode = this.root;

    const traverse = node => {
      if (node.left) traverse(node.left);
      nodesArr.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(currNode);
    return nodesArr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let nodesArr = [];
    let currNode = this.root;

    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      nodesArr.push(node.val);
    }

    traverse(currNode);
    return nodesArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let nodesArr = [];
    let queue = [];
    let currNode = this.root;

    queue.push(currNode);

    while(queue.length) {
      currNode = queue.shift();
      nodesArr.push(currNode.val);

      if(currNode.left) queue.push(currNode.left);
      if(currNode.right) queue.push(currNode.right);
    }

    return nodesArr;
  }
}

module.exports = BinarySearchTree;
