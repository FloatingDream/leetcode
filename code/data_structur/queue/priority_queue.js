function PriorityQueue() {
  // 优先队列的元数据节点
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  const items = []

  PriorityQueue.prototype.push = function push(element, priority) {
    // 创建新节点
    const item = new QueueElement(element, priority)

    // 寻找插入地点
    if (items.length === 0) {
      items.push(item)
    } else {
      // 循环取出每个元素的优先级，反向取保证同优先级后加入的在其后方
      for (let i = items.length - 1; i >= 0; i -= 1) {
        if (items[i].priority >= priority) {
          items.splice(i, 0, item)
        }
      }
    }
  }

  // 取出数据
  PriorityQueue.prototype.pop = function pop() {
    return items.shift()
  }

  // 查询队列长度
  PriorityQueue.prototype.size = function size() {
    return items.length
  }

  // 判断队列是否为空
  PriorityQueue.prototype.isEmpty = function isEmpty() {
    return items.length === 0
  }
  // 查看队列第一个元素
  PriorityQueue.prototype.peek = function peek() {
    return items[0]
  }
  // 输出队列
  PriorityQueue.prototype.toString = function toString() {
    let str = ''
    for (let i = 0; i < items.length; i += 1) {
      str += ` ${items[i].element}-${items[i].priority}`
    }
    return str
  }
}

export default PriorityQueue
