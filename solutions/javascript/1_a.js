const fs = require('fs')
const _ = require('lodash')

const data = fs.readFileSync('input_1.txt', 'utf8').trim()

const digits = [...data.slice()]
const shifted = [...data.slice(1), data[0]]

const pairs = _.zip(
  digits,
  shifted
)

const sum = _.reduce(pairs, (total, [first, second]) => {
  return first === second ? total + parseInt(first, 10) : total
}, 0)

console.log(sum)
