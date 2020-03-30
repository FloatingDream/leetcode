function ArrayList() {
  this.array = []

  ArrayList.prototype.insert = function insert(item) {
    this.array.push(item)
  }

  ArrayList.prototype.toString = function toString() {
    return this.array.join()
  }

  ArrayList.prototype.swap = function swap(i, j) {
    const temp = this.array[i]
    this.array[i] = this.array[j]
    this.array[j] = temp
  }

  ArrayList.prototype.bubbleSort = function bubbleSort() {
    const { length } = this.array
    let min = null
    for (let i = 0; i < length - 1; i += 1) {
      min = i
      for (let j = i + 1; j < length; j += 1) {
        if (this.array[min] > this.array[j]) {
          min = j
        }
      }
      this.swap(min, i)
    }
  }
}

export default ArrayList
