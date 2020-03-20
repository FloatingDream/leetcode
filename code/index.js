function DoubleLinkedList() {
  this.length = 0
  this.head = null
  this.tail = null // 最后的元素特有
  // 定义元数据
  function Node(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
  // 链表末尾添加数据
  DoubleLinkedList.prototype.append = function append(element) {
    const node = new Node(element)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      const endNode = this.tail
      endNode.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length += 1
  }

  // 从链表任意地方插入数据
  DoubleLinkedList.prototype.insert = function insert(element, position) {
    const node = new Node(element)
    // position 越界查询
    if (position < 0 || position > this.length) {
      return false
    }
    // 判断当前链表是否为空
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      // 判断当前插入位置是否为第一个
      let currentNode = this.head
      if (position === 0) {
        this.head = node
        node.next = currentNode
        currentNode.prev = node
      } else if (position === this.length) { // 判断当前位置是否是在尾部后面插入
        currentNode = this.tail // 找到当前节点
        currentNode.next = node // 节点链接变换
        node.prev = currentNode
        this.tail = node
      } else {
        for (let i = 0; i < position; i += 1) {
          currentNode = currentNode.next // 找到当前节点
        }
        const prevNode = currentNode.prev // 保存当前节点前一个节点
        // 节点链接变换
        node.next = currentNode
        node.prev = prevNode
        prevNode.next = node
        currentNode.prev = node
      }
    }
    this.length += 1
    return true
  }

  // 删除对应位置的元素
  DoubleLinkedList.prototype.removeAt = function removeAt(position) {
    // 越界判断
    if (position > this.length || position < 0 || this.length === 0) return false

    let currentNode = this.head
    // 删除链表中第一个元素
    if (position === 0) {
      if (this.length === 1) { // 链表中只有一个元
        this.head = null
        this.tail = null
      } else { // 有多个元素
        this.head = currentNode.next
        currentNode.next.prev = null
      }
    } else if (position === this.length - 1) { // 删除链表中最后一个元素
      currentNode = this.tail
      this.tail = currentNode.prev
      this.tail.next = null
    } else { // 删除中间元素
      for (let i = 0; i < position; i += 1) {
        currentNode = currentNode.next // 找到需要删除的元素
      }
      const prevNode = currentNode.prev // 删除元素的前一个
      // 改变指向该元素的链接
      prevNode.next = currentNode.next
      currentNode.next.prev = prevNode
    }

    this.length -= 1
    return true
  }

  // 获取元素在链表中的位置
  DoubleLinkedList.prototype.indexOf = function indexOf(element) {
    if (this.length === 0) return false
    let currentNode = this.head
    // 逐一对比查询位置
    for (let i = 0; i < this.length; i += 1) {
      if (currentNode.element === element) {
        return i
      }
      currentNode = currentNode.next
    }

    return false
  }

  // 根据元素删除节点
  DoubleLinkedList.prototype.remove = function remove(element) {
    const position = this.indexOf(element)
    console.log(position)
    return this.removeAt(position)
  }

  // 返回链表长度
  DoubleLinkedList.prototype.size = function size() {
    return this.length
  }

  // 获取第一个元素
  DoubleLinkedList.prototype.getHead = function getHead() {
    return this.head
  }

  // 获取最后一个元素
  DoubleLinkedList.prototype.getTail = function getTail() {
    return this.tail
  }

  // 遍历-正向
  DoubleLinkedList.prototype.forwardString = function forwardString() {
    let currentNode = this.head
    if (this.head === null) return null
    let str = ''
    for (let i = 0; i < this.length; i += 1) {
      str += `,${currentNode.element}`
      currentNode = currentNode.next
    }
    return str
  }

  // 遍历-逆向
  DoubleLinkedList.prototype.backwardString = function backwardString() {
    let currentNode = this.tail
    if (this.tail === null) return null
    let str = ''
    for (let i = 0; i < this.length; i += 1) {
      str += `,${currentNode.element}`
      currentNode = currentNode.prev
    }
    return str
  }

  // toString
  DoubleLinkedList.prototype.toString = function toString() {
    return this.forwardString()
  }
}

const doubleLinkedList = new DoubleLinkedList()

doubleLinkedList.append(1)
const str = doubleLinkedList.toString()
console.log(str)
