const path = require('path')
// require is used to get modules
console.log(path.basename(__filename))

const myModule = require('./exports')

console.log(myModule)