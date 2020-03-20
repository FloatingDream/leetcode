import DoubleLinkedList from './double_linked_list'

const doubleLinkedList = new DoubleLinkedList()

doubleLinkedList.append(1)
const append = doubleLinkedList.toString()
test('doubleLinkedList-append', () => {
  expect(append).toBe(',1')
})

doubleLinkedList.insert(2, 1)
const insert = doubleLinkedList.toString()
test('doubleLinkedList-insert', () => {
  expect(insert).toBe(',1,2')
})

doubleLinkedList.removeAt(0)
const removeAt = doubleLinkedList.toString()
test('doubleLinkedList-removeAt', () => {
  expect(removeAt).toBe(',2')
})

const indexOf = doubleLinkedList.indexOf(2)
test('doubleLinkedList-indexOf', () => {
  expect(indexOf).toBe(0)
})

doubleLinkedList.remove(2)
const remove = doubleLinkedList.toString()
test('doubleLinkedList-remove', () => {
  expect(remove).toBe(null)
})

const size = doubleLinkedList.size()
test('doubleLinkedList-size', () => {
  expect(size).toBe(0)
})

doubleLinkedList.append(1)
let getHead = doubleLinkedList.getHead()
getHead = getHead.element
test('doubleLinkedList-getHead', () => {
  expect(getHead).toBe(1)
})

let getTail = doubleLinkedList.getTail()
getTail = getTail.element
test('doubleLinkedList-getTail', () => {
  expect(getTail).toBe(1)
})

const forwardString = doubleLinkedList.forwardString()
test('doubleLinkedList-forwardString', () => {
  expect(forwardString).toBe(',1')
})

let backwardString = doubleLinkedList.append(2)
backwardString = doubleLinkedList.backwardString()
test('doubleLinkedList-backwardString', () => {
  expect(backwardString).toBe(',2,1')
})
