const fs = require('fs')
const _ = require('lodash')

const data = fs.readFileSync('input_2.txt', 'utf8').trim()

const rows = data.split('\n')

const checkSum = _.reduce(rows, (sum, row) => {
  const numbers = row.split('\t').map((n) => parseInt(n, 10))
  const max = _.max(numbers)
  const min = _.min(numbers)
  return sum + max - min
}, 0)

console.log(checkSum)