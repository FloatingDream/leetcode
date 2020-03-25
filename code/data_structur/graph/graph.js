/* eslint-disable no-param-reassign */
import Dictionay from '../dictionay/dictionay'
import Queue from '../queue/queue'

function Graph() {
  this.vertexes = [] // 顶点
  this.adjList = new Dictionay() // 边

  Graph.prototype.addVertex = function addVertex(v) {
    this.vertexes.push(v)
    this.adjList.set(v, [])
  }

  Graph.prototype.addEdge = function addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  Graph.prototype.toString = function toString() {
    let resultStr = ''
    for (let i = 0; i < this.vertexes.length; i += 1) {
      resultStr += `${this.vertexes[i]}->`
      const adj = this.adjList.get(this.vertexes[i])
      for (let j = 0; j < adj.length; j += 1) {
        resultStr += `${adj[j]} `
      }
      resultStr += '\n'
    }
    return resultStr
  }

  Graph.prototype.initializeColor = function initializeColor() {
    const colors = []
    for (let i = 0; i < this.vertexes.length; i += 1) {
      colors[this.vertexes[i]] = 'white'
    }
    return colors
  }

  Graph.prototype.bfs = function bfs(v, handler) {
    // 1.初始化颜色
    const color = this.initializeColor()

    // 2.创建队列
    const queue = new Queue()

    // 3.将传入的顶点放入队列中
    queue.enqueue(v)

    // 4.从队列中依次取出和放入数据
    while (!queue.isEmpty()) {
      // 4.1.从队列中取出数据
      const qv = queue.dequeue()

      // 4.2.获取qv相邻的所有顶点
      const qAdj = this.adjList.get(qv)

      // 4.3.将qv的颜色设置成灰色
      color[qv] = 'gray'

      // 4.4.将qAdj的所有顶点依次压入队列中
      for (let i = 0; i < qAdj.length; i += 1) {
        const a = qAdj[i]
        if (color[a] === 'white') {
          color[a] = 'gray'
          queue.enqueue(a)
        }
      }

      // 4.5.因为qv已经探测完毕, 将qv设置成黑色
      color[qv] = 'black'

      // 4.6.处理qv
      if (handler) {
        handler(qv)
      }
    }
  }

  // 深度优先搜索
  Graph.prototype.dfs = function dfs(handler) {
    // 1.初始化颜色
    const color = this.initializeColor()

    // 2.遍历所有的顶点, 开始访问
    for (let i = 0; i < this.vertexes.length; i += 1) {
      if (color[this.vertexes[i]] === 'white') {
        this.dfsVisit(this.vertexes[i], color, handler)
      }
    }
  }

  // dfs的递归调用方法
  Graph.prototype.dfsVisit = function dfsVisit(u, color, handler) {
    // 1.将u的颜色设置为灰色
    color[u] = 'gray'

    // 2.处理u顶点
    if (handler) {
      handler(u)
    }

    // 3.u的所有邻接顶点的访问
    const uAdj = this.adjList.get(u)
    for (let i = 0; i < uAdj.length; i += 1) {
      const w = uAdj[i]
      if (color[w] === 'white') {
        this.dfsVisit(w, color, handler)
      }
    }

    // 4.将u设置为黑色
    color[u] = 'black'
  }
}

export default Graph
