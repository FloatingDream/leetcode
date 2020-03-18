function Queue() {
  const items = []

  // 插入数据到队列
  Queue.prototype.push = function push(element) {
    return items.push(element)
  }

  // 取出数据
  Queue.prototype.pop = function pop() {
    return items.shift()
  }

  // 查询队列长度
  Queue.prototype.size = function size() {
    return items.length
  }

  // 判断队列是否为空
  Queue.prototype.isEmpty = function isEmpty() {
    return items.length === 0
  }
  // 查看队列第一个元素
  Queue.prototype.peek = function peek() {
    return items[0]
  }
  // 输出队列
  Queue.prototype.toString = function toString() {
    return items.toString()
  }
}

export default Queue
