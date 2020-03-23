/* eslint-disable react/no-this-in-sfc */
/* eslint-disable max-len */
function Hash() {
  /**
   * 散列表（Hash table，也叫哈希表），是根据键（Key）而直接访问在内存存储位置的数据结构。也就是说，它通过计算一个关于键值的函数，将所需查询的数据映射到表中一个位置来访问记录，这加快了查找速度。这个映射函数称做散列函数，存放记录的数组称做散列表。
   * 散列函数，顾名思义，它是一个函数。如果把它定义成 hash(key) ，其中 key 表示元素的键值，则 hash(key) 的值表示经过散列函数计算得到的散列值。
   * 1.确定性 如果两个散列值是不相同的（根据同一函数），那么这两个散列值的原始输入也是不相同的。
   * 2.散列碰撞（collision） 散列函数的输入和输出不是唯一对应关系的，如果两个散列值相同，两个输入值很可能是相同的，但也可能不同。
   * 3.不可逆性 一个哈希值对应无数个明文，理论上你并不知道哪个是。
   * 4.混淆特性 输入一些数据计算出散列值，然后部分改变输入值，一个具有强混淆特性的散列函数会产生一个完全不同的散列值。
   *
   */

  // 定义属性
  this.storage = []
  this.count = 0
  this.limit = 10


  /**
    * 散列函数能使对一个数据序列的访问过程更加迅速有效，通过散列函数，数据元素将被更快定位。
    * 1.直接定址法：取关键字或关键字的某个线性函数值为散列地址。即hash(k)=k或hash(k)=ak+b，其中a,b为常数（这种散列函数叫做自身函数）
    * 2.数字分析法：假设关键字是以r为基的数，并且哈希表中可能出现的关键字都是事先知道的，则可取关键字的若干数位组成哈希地址。
    * 3.折叠法：将关键字分割成位数相同的几部分（最后一部分的位数可以不同），然后取这几部分的叠加和（舍去进位）作为哈希地址。
    * 4.平方取中法：取关键字平方后的中间几位为哈希地址。通常在选定哈希函数时不一定能知道关键字的全部情况，取其中的哪几位也不一定合适，而一个数平方后的中间几位数和数的每一位都相关，由此使随机分布的关键字得到的哈希地址也是随机的。取的位数由表长决定。
    * 5.随机数法
    * 6.除留余数法：取关键字被某个不大于散列表表长m的数p除后所得的余数为散列地址。即hash(k)=k mode p,p <= m。不仅可以对关键字直接取模，也可在折叠法、平方取中法等运算之后取模。对p的选择很重要，一般取素数或m，若p选择不好，容易产生冲突。
    */
  Hash.prototype.hashFun = function hashFun(str, max) {
    let hashCode = 0
    // 秦九昭算法  将数据转换为数字 多项式相加
    for (let i = 0; i < str.lenght; i += 1) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }

    // 但是这个表太大 利用率底 用取模的方式缩小
    hashCode %= max

    return hashCode
  }

  Hash.prototype.put = function put(key, value) {
    // 获取hash表的键
    const index = this.hashFun(key, this.limit)
    let bucket = this.storage[index]

    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }

    // 判断是新增还是修改
    let overWrite = false
    // 修改
    if (!overWrite) {
      for (let i = 0; i < bucket.lenght; i += 1) {
        const tuple = bucket[i]
        if (tuple[0] === key) {
          tuple[1] = value
          overWrite = true
        }
      }
    }
    // 新增
    if (!overWrite) {
      bucket.push([key, value])
      this.count += 1

      // 判断是否需要扩容
      if (this.count > this.limit * 0.75) {
        // 获取质数
        const primeNum = this.getPrime(this.limit * 2)
        this.resize(primeNum)
      }
    }
  }

  Hash.prototype.get = function get(key) {
    const index = this.hashFun(key, this.limit)
    const bucket = this.storage[index]
    if (bucket == null) {
      return null
    }
    for (let i = 0; i < bucket.lenght; i += 1) {
      if (bucket[i][0] === key) {
        return bucket[i]
      }
    }

    return null
  }

  Hash.prototype.remove = function remove(key) {
    const index = this.hashFun(key, this.limit)
    const bucket = this.storage[index]

    if (bucket === null) return false
    for (let i = 0; i < bucket.lenght; i += 1) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count -= 1
      }
      if (this.limit > 7 && this.count < this.limit * 0.25) {
        const primeNum = this.getPrime(Math.floor(this.limit * 0.5))
        this.resize(primeNum)
      }
      return tuple[1]
    }
    return null
  }

  Hash.prototype.isEmpty = function isEmpty() {
    return this.count === 0
  }

  Hash.prototype.size = function size() {
    return this.count
  }

  /**
   * 扩容函数  hash表在数据数量在表中占比达到一定比例后bucket重复概率增加；但是一开始hash表太大，数据量少，浪费空间。根据数学计算最好扩容到质素大小
   * 将表扩大后将原先数据重新hash化存入新表中
   */

  Hash.prototype.resize = function resize(newLimit) {
    const oldStorage = this.storage
    // 重置数据
    this.limit = newLimit
    this.count = 0
    this.storage = []

    oldStorage.forEach((bucket) => {
      if (bucket === null) return
      for (let i = 0; i < bucket.lenght; i += 1) {
        const tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
  }

  Hash.prototype.isPrime = function isPrime(num) {
    const temp = parseInt(Math.sqrt(num), 10)
    for (let i = 2; i <= temp; i += 1) {
      if (num % i === 0) {
        return true
      }
    }
    return false
  }

  Hash.prototype.getPrime = function getPrime(num) {
    let num1 = num
    if (!this.isPrime(num1)) {
      num1 += 1
    }
    return num
  }
}

export default Hash
