import Set from './set'

const set = new Set()
set.add('1')

const has = set.has('1')
test('', () => {
  expect(has).toBe(true)
})

set.remove('1')
const remove = {
}
test('', () => {
  expect(set.items.toString()).toBe(remove.toString())
})

const set1 = new Set()
set1.add('2')
set1.add('3')

const size = set1.size()
test('', () => {
  expect(size).toBe(2)
})

const values = ['2', '3']
test('', () => {
  expect(set1.values().toString()).toBe(values.toString())
})


// const clear = {
// }
// set.clear()
// test('', () => {
//   expect(set.items.toString()).toBe(clear.toString())
// })
