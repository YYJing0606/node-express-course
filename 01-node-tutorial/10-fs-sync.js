//// Built-in modules (os, path, fs, http)
//// fs module, sync
const { readFileSync, writeFileSync } = require('fs')

//// same with
// const fs = require('fs')
// fs.readFileSync

//// read file
const first = readFileSync('./content/first.txt', 'utf8')   //// 'utf8' for encoding
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

//// write file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }   //// this allow to append, if do not want just remove it
)