//// Built-in modules (os, path, fs, http)
//// http module
const http = require('http')

//// create server, req = request, res = response
const server = http.createServer((req, res) => {
  // res.write('Welcome to our home page')    //// send response
  // res.end()                                //// end response

  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //     <h1>Oops!</h1>
  //     <p>We can't seem to find the page you are looking for</p>
  //     <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //// IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  //// SWITCH TO IF, ELSE IF, ELSE (BELOW)
  //// WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === '/') {  //// req.url means what address client request
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
    `)
  }
})

//// port server listen to
server.listen(5000)