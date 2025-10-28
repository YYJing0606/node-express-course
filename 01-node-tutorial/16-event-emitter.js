//// get back the class
//// if want custom extend from class
//// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//// on and emit methods
//// keep track of the order
//// additional arguments
//// built-in modules utilize it

//// emit "response" event but haven't declare any listener
customEmitter.emit('response')
console.log("nothing happen here")

//// listen "response" event, when emit event with "response", do callback
customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

//// then emit "response" event, but below "response" event will not be triggered
customEmitter.emit('response', 'john', 34)

customEmitter.on('response', () => {
  console.log('some other logic here')
})

// customEmitter.emit('response')   //// try not command it, will see extra output