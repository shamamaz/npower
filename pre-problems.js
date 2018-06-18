/*
  Given a file input, output the contents of a file
  to the console
*/

const input = require('fs').readFileSync('file.txt', 'utf8');

console.log(input)

/*
  Create a constant equal to 1
  Write a test to prove it equals 1
  Write a test to prove it does not equal anything other than 1
  Use "assert", remember to include the library in REPL.it
  Note: undefined means the test passed
*/

let assert = require('assert');

const SOME_CONSTANT = 1
assert.equal(SOME_CONSTANT, 1, 'Equal Test failed')
assert.notEqual(SOME_CONSTANT, 2, 'Not Equal Test failed')

/*
1. String to array
Take this string

“1,2,3,4,5”

And use it to create the following array:

[1,2,3,4,5]
*/


const result = "1,2,3,4,5".split(',')
console.log(result)

/*
2. Array to groups of arrays
Given the following file input (string format)

  `775  785  361
  622  375  125
  297  839  375`

Create an object of arrays:

 [
  [775,  785,  361],
  [622,  375,  125],
  [297,  839,  375],
]
*/

// use split to split by line (\n character)
const splitted = `775  785  361
622  375  125
297  839  375`.split('\n')

const result = splitted.map(str => str.split(' ').filter(item => item.length > 0).map(item => parseInt(item)))
// use map to create an array

/*
  Unique an array

  Given the following array, create another array of unique values

  [1,1,2,3,4,5,5,5,6,7,7,8,9,10,11,12,13,14,14,15]
*/



/*
  Sum the largest two of three numbers
  Given three numbers, find the largest two
  and return the sum of those two largest numbers

  Example
  Given: 1 2 3
  Result: 5 (2 + 3)
*/

