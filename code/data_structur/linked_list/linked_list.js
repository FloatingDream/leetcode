function LinkedList() {
  function Node(element) {
    this.element = element
    this.next = null
  }

  this.length = 0
  this.head = null

  LinkedList.prototype.toString = function toString() {
    let current = this.head
    let linkedListString = ''
    while (current) {
      linkedListString += ` ${current.element}`
      current = current.next
    }
    return linkedListString
  }
  // 链表最后面插入
  LinkedList.prototype.append = function append(element) {
    // 1.创建新节点
    const node = new Node(element)
    // 2.节点插入
    // 2.1 判断是否是空链表
    if (this.head === null) {
      // 2.2 空链表处理
      this.head = node
    } else {
      // 2.3 非空链表处理
      // 2.3.1 寻找链表最后一个节点
      // 2.3.1.1 保存当前节点
      let current = this.head
      // 2.3.1.2 循环查询
      while (current.next) {
        current = current.next
      }
      // 2.3.1.3 查询到后插入到最后一个节点后
      current.next = node
    }
    this.length += 1
  }

  // 按下标插入
  LinkedList.prototype.insert = function insert(position, element) {
  // 1.越界检查
    if (position > this.length || position < 0) {
      return false
    }
    // 2.创建节点
    const node = new Node(element)
    let current = null
    let prev = null

    // 3.寻找插入位置
    // 3.1开头插入
    if (position === 0) {
      // // 3.1.1 链表没有其他元素
      // if (this.length === 0) {
      //   this.head = node
      // } else {
      // // 3.1.2 链表中有其他元素
      //   current = this.head
      //   this.head = node
      //   node.next = current
      // }
      current = this.head
      this.head = node
      node.next = current
    } else {
      // 3.2 中间插入
      for (let i = 0; i < position; i += 1) {
        current = this.head
        prev = current
        current = current.next
      }
      prev.next = node
      node.next = current
    }
    this.length += 1
    return true
  }

  // 删除指定位子元素
  LinkedList.prototype.removeAt = function removeAt(position) {
  // 边界
    if (position < 0 || position > this.length) {
      return false
    }

    // 查找位置
    let current = this.head
    let prev = null
    // 删除第一个
    if (position === 0) {
      this.head = current.next
    } else {
      for (let i = 0; i < position; i += 1) {
        prev = current
        current = current.next
      }
      prev.next = current.next
    }
    this.length -= 1

    return current.element
  }
  // 查询指定元素位置
  LinkedList.prototype.indexOf = function indexOf(element) {
    // 链表是否有内容
    if (this.lenth === 0) {
      return false
    }
    // 逐一比对
    let current = this.head
    for (let i = 0; i < this.length; i += 1) {
      if (current.element === element) {
        return i
      }
      current = current.next
    }
    return false
  }
  // 删除元素
  LinkedList.prototype.remove = function remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  // 链表是否为空
  LinkedList.prototype.isEmpty = function isEmpty() {
    return this.length === 0
  }
  // 获取链表第一个元素
  LinkedList.prototype.getFirst = function getFirst() {
    return this.head.element
  }
}


export default LinkedList
