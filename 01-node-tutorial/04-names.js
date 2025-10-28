//// local, we do not want share it
const secret = 'SUPER SECRET'

//// variable want to share
const john = 'john'
const peter = 'peter'

console.log(module)

//// export variables as object
module.exports = { john, peter }