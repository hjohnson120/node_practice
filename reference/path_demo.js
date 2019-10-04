const path = require('path')

// Base file name
console.log(path.basename(__filename))

// directory name
console.log(path.dirname(__filename))

// file extention
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename.base))

// join
console.log(path.join(__dirname, 'test', 'hello.html'))
