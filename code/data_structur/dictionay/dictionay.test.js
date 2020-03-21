import Dictionay from './dictionay'

const dictionay = new Dictionay()


dictionay.set('sd', 'sd')
const set = {
  sd: 'sd',
}
test('', () => {
  expect(set.toString()).toBe(dictionay.itmes.toString())
})

const has = dictionay.has('sd')

test('', () => {
  expect(has).toBe(true)
})

dictionay.remove('sd')
const remove = {
}
test('', () => {
  expect(remove.toString()).toBe(dictionay.itmes.toString())
})


dictionay.set('1', '2')
const get = dictionay.get('1')
test('', () => {
  expect(get).toBe('2')
})

const keys = dictionay.keys()
const keys1 = ['1']
test('', () => {
  expect(keys.toString()).toBe(keys1.toString())
})

const values = dictionay.values()
const values1 = ['2']
test('', () => {
  expect(values.toString()).toBe(values1.toString())
})

const size = dictionay.size()
test('', () => {
  expect(size).toBe(1)
})

dictionay.clear()
const clear = {}
test('', () => {
  expect(dictionay.itmes.toString()).toBe(clear.toString())
})
