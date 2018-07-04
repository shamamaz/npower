const fs = require('fs')
const _ = require('lodash')

const data = fs.readFileSync('input.txt', 'utf8').trim()

const rows = data.split('\n')

const generatePairs = (arr) => {
  return _.flatten(
    _.map(arr, (n, i) => {
      const rest = _.filter(arr, (m, j) => i !== j)
      return _.map(rest, (m) => [n, m])
    })
  )
}

const checkSum = _.reduce(rows, (sum, row) => {
  const numbers = row.split('\t').map((n) => parseInt(n, 10))
  const pairs = generatePairs(numbers)

  return sum + _.reduce(pairs, (value, [n, m]) => {
    if (value) return value
    const [a, b] = n >= m ? [n, m] : [m, n]
    return a % b === 0 ? a / b : null
  }, null)
}, 0)

console.log(checkSum)