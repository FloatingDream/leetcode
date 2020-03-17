function Stack() {
  const items = []

  Stack.prototype.push = function push(element) {
    return items.push(element)
  }

  Stack.prototype.toString = function toString() {
    return items.toString()
  }

  Stack.prototype.pop = function pop() {
    return items.pop()
  }

  Stack.prototype.peek = function peek() {
    return items[items.length - 1]
  }

  Stack.prototype.size = function size() {
    return items.length
  }

  Stack.prototype.isEmpty = function isEmpty() {
    return items.length === 0
  }
}

export default Stack
