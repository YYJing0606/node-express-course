//// previously 10-fs-sync.js, read file and store output in variable, but this will cause error if read large file
const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) //// change each output to 90kb
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })    //// set encoding
// const stream = createReadStream('../content/big.txt', { highWaterMark: 90000, encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')  //// default for each output is 64kb

stream.on('data', (result) => {
  console.log(result)
})

stream.on('error', (err) => console.log(err))