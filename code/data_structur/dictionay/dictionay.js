function Dictionay() {
// 定义字典元素
  // 字典就是把数组的下边转为key值。成为类数组对象。
  this.itmes = {}

  Dictionay.prototype.set = function set(key, value) {
    this.itmes[key] = value
    return true
  }

  Dictionay.prototype.has = function has(key) {
    return Object.prototype.hasOwnProperty.call(this.itmes, key)
  }

  Dictionay.prototype.remove = function remove(key) {
    if (!this.has(key)) return false
    return delete this.itmes[key]
  }

  Dictionay.prototype.get = function get(key) {
    return this.has(key) ? this.itmes[key] : undefined
  }

  Dictionay.prototype.keys = function keys() {
    return Object.keys(this.itmes)
  }

  Dictionay.prototype.values = function values() {
    return Object.values(this.itmes)
  }

  Dictionay.prototype.size = function size() {
    return this.keys().length
  }

  Dictionay.prototype.clear = function clear() {
    this.itmes = {}
  }
}

export default Dictionay
