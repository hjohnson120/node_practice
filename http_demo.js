const http = require('http')

// create server object
http
  .createServer((req, res) => {
    res.write('hello world')
    res.end()
  })
  .listen(5000, () => console.log('server running'))
