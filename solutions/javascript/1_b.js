const fs = require('fs')
const _ = require('lodash')

const data = fs.readFileSync('input_1.txt', 'utf8').trim()

const digits = [...data.slice()]
const offset = digits.length / 2
const shifted = [...data.slice(offset), ...data.slice(0, offset)]

const pairs = _.zip(
  digits,
  shifted
)

const sum = _.reduce(pairs, (total, [first, second]) => {
  return first === second ? total + parseInt(first, 10) : total
}, 0)

console.log(sum)
