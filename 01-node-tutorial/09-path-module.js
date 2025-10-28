//// Built-in modules (os, path, fs, http)
//// path module, allow to access path
const path = require('path')

console.log(path.sep)

//// path.join join all arguments and return file path
//// if use '/content', still can get correct file path because it helps us normalize
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

//// return last portion of a path
const base = path.basename(filePath)
console.log(base)

console.log(__dirname)

//// return absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)