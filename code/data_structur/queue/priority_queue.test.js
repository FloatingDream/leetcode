import PriorityQueue from './priority_queue'

const priorityQueue = new PriorityQueue()

priorityQueue.push(2, 2)
priorityQueue.push(1, 1)
const push = priorityQueue.toString()
test('priorityQueue-push', () => {
  expect(push).toBe(' 1-1 2-2')
})

const isEmpty = priorityQueue.isEmpty()
test('priorityQueue-isEmpty', () => {
  expect(isEmpty).toBe(false)
})

const peek = priorityQueue.peek()
let tobe = { element: 1, priority: 1 }
test('priorityQueue-peek', () => {
  expect(peek).toEqual(tobe)
})

const pop = priorityQueue.pop()
tobe = { element: 1, priority: 1 }
test('priorityQueue-pop', () => {
  expect(pop).toEqual(tobe)
})

const size = priorityQueue.size()
test('priorityQueue-size', () => {
  expect(size).toBe(1)
})
