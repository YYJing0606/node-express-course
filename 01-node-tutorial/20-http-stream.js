var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)    //// show output but file to be read is too large, large chunks, can see it header
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)  //// .pipe push read stream to write stream, so can read and write data in chunks
    })                      //// can see header Transfer-Encoding: chunked
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)