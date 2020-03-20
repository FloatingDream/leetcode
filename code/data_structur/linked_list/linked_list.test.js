import LinkedList from './linked_list'

const linkedList = new LinkedList()

linkedList.append(1)
const append1 = linkedList.toString()
test('linkedList-append', () => {
  expect(append1).toBe(' 1')
})


linkedList.append(1)
const append2 = linkedList.toString()
test('linkedList-append', () => {
  expect(append2).toBe(' 1 1')
})

const getFirst = linkedList.getFirst()
test('linkedList-getFirst', () => {
  expect(getFirst).toBe(1)
})

const index = linkedList.indexOf(1)
test('linkedList-index', () => {
  expect(index).toBe(0)
})

linkedList.insert(1, 2)
const insert = linkedList.toString()
test('linkedList-insert', () => {
  expect(insert).toBe(' 1 2 1')
})

const isEmpty = linkedList.isEmpty()
test('linkedList-isEmpty', () => {
  expect(isEmpty).toBe(false)
})

const remove = linkedList.remove(1)
test('linkedList-remove', () => {
  expect(remove).toBe(1)
})

const removeAt = linkedList.removeAt(0)
test('linkedList-removeAt', () => {
  expect(removeAt).toBe(2)
})
