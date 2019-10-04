const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // if (req.url === '/')
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err
  //       res.writeHead(200, { 'Content-Type': 'HTML' })
  //       res.end(content)
  //     }
  //   )
  // if (req.url === '/api/users') {
  //   const users = [{ name: 'bob', age: 4 }, { name: 'heather', age: 26 }]
  //   res.writeHead(200, { 'Content-Type': 'application/json' })
  //   res.end(JSON.stringify(users))
  // }

  // build dynamic file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  )
// extention of file
let extName = path.extname(filePath)

// initial content type

let contentType = 'text.html'
// check ext and et content type 
switch(ext)
  
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => `server running on port ${PORT}`)
