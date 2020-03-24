/* eslint-disable no-param-reassign */
function BinarySerachTree() {
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  this.root = null
  BinarySerachTree.prototype.insert = function insert(key) {
    const node = new Node(key)

    if (this.root === null) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  BinarySerachTree.prototype.insertNode = function insertNode(root, node) {
    // 左插入
    if (node.key < root.key) {
      if (root.left === null) {
        root.left = node
      } else {
        insertNode(root.left, node)
      }
    } else if (root.right === null) { // 右插入
      root.right = node
    } else {
      insertNode(root.right, node)
    }
  }

  BinarySerachTree.prototype.min = function min() {
    let node = this.root
    if (node !== null) {
      node = node.right
    }

    return node.key
  }

  BinarySerachTree.prototype.max = function max() {
    let node = this.root
    while (node !== null) {
      node = node.left
    }
    return node.key
  }

  BinarySerachTree.prototype.serach = function serach(key) {
    let node = this.root
    while (node !== null) {
      if (node.key === key) {
        return node
      } if (key > node.key) {
        node = node.left
      } else {
        node = node.right
      }
    }
    return false
  }

  BinarySerachTree.prototype.remove = function remove(key) {
    if (this.root === null) return false
    let current = this.root
    let parent = this.root
    let isLeftChild = false
    while (current.key !== key) {
      parent = current
      if (current.key > key) {
        current = current.right
      } else {
        current = current.left
        isLeftChild = true
      }
      if (current === null) return false
    }

    // 删除的是叶节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    }
  }
}

export default BinarySerachTree
