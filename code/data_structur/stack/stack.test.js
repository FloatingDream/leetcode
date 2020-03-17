import Stack from './stack'

const stack = new Stack()
// 测试 push 方法
stack.push(1)
const push = stack.toString()
test('stack-push', () => {
  expect(push).toBe('1')
})

// 测试 pop
stack.push(2)
stack.pop()
const pop = stack.toString()
test('stack-pop', () => {
  expect(pop).toBe('1')
})

// 测试peek
const peek = stack.peek()
test('stack-peek', () => {
  expect(peek).toBe(1)
})

// size
const size = stack.size()
test('stack-size', () => {
  expect(size).toBe(1)
})

// isEmpty
const isEmpty = stack.isEmpty()
test('stack-isEmpty', () => {
  expect(isEmpty).toBe(false)
})
