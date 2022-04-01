const knex = require('knex')
const testConfig = require('./knexfile').test
const testDb = knex(testConfig)

const db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getRandom should return a string', () => {
  return db.getRandom(testDb)
    .then((statement) => {
        expect(typeof statement).toBe("string");
        return null
  })
})

test('getSpicy should return a string', () => {
  return db.getSpicy(testDb)
    .then((statement) => {
        expect(typeof statement).toBe("string");
        return null
  })
})

test('getSweet should return a string', () => {
  return db.getSweet(testDb)
    .then((statement) => {
        expect(typeof statement).toBe("string");
        return null
  })
})

test('getRandom string should not be empty', () => {
  return db.getRandom(testDb)
    .then((statement) => {
        expect(statement).not.toBe('')
        return null
  })
})

test('getSpicy string should not be empty', () => {
  return db.getSpicy(testDb)
    .then((statement) => {
        expect(statement).not.toBe('')
        return null
  })
})

test('getSweet string should not be empty', () => {
  return db.getSweet(testDb)
    .then((statement) => {
        expect(statement).not.toBe('')
        return null
  })
})