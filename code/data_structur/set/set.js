function Set() {
  // 使用一个对象来保存，关键点：为撒不用数组需要保证数据的唯一性。对象的键可以保证
  this.items = {}
  Set.prototype.has = function has(value) {
    return Object.prototype.hasOwnProperty.call(this.items, value)
  }

  Set.prototype.add = function add(value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }

  Set.prototype.remove = function remove(value) {
    if (!this.has(value)) return false
    delete this.items[value]
    return true
  }

  Set.prototype.clear = function clear() {
    this.items = {}
    return true
  }

  Set.prototype.values = function values() {
    return Object.keys(this.items)
  }

  Set.prototype.size = function size() {
    return this.values().length
  }
}

export default Set
