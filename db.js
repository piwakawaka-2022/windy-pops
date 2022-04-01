const server = require('./server')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

// function to generate random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

// function to generate random statement as string
function getRandom(db = connection) {
  return db('statements')
    .select()
    .then((statements) => {
      const max = statements.length
      const id = getRandomInt(max)
      const random = statements[id].content
      console.log(random)
    })
}

// function to generate random Spicy statement as string
function getSpicy(db = connection) {
  return db('statements')
    .select()
    .where('spicy', 1)
    .then((statements) => {
      const max = statements.length
      const id = getRandomInt(max)
      const randomSpicy = statements[id].content
      console.log(randomSpicy)
    })
}

// function to generate random Sweet statement as string
function getSweet(db = connection) {
  return db('statements')
    .select()
    .where('spicy', 0)
    .then((statements) => {
      const max = statements.length
      const id = getRandomInt(max)
      const randomSweet = statements[id].content
      console.log(randomSweet)
    })
}

module.exports = {
  getRandom,
  getSpicy,
  getSweet,
}
