import Queue from './queue'

const queue = new Queue()
// 测试push
queue.push(1)
const push = queue.toString()
test('queue-push', () => {
  expect(push).toBe('1')
})
// 测试pop
queue.pop()
const pop = queue.toString()
test('queue-pop', () => {
  expect(pop).toBe('')
})
// 测试size
queue.push(1)
const size = queue.size()
test('queue-size', () => {
  expect(size).toBe(1)
})
// 测试peek
const peek = queue.peek()
test('queue-peek', () => {
  expect(peek).toBe(1)
})
// 测试isEmpty
const isEmpty = queue.isEmpty()
test('queue-isEmpty', () => {
  expect(isEmpty).toBe(false)
})
queue.pop()
const isEmpty2 = queue.isEmpty()
test('queue-isEmpty', () => {
  expect(isEmpty2).toBe(true)
})
