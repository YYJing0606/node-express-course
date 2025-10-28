const http = require('http')

//// previously 12-http.js
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

//// server listen "request" event
//// Using Event Emitter API
const server = http.createServer()
//// emits request event
//// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)