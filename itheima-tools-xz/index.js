const data = require('./src/dataFormat')
const escape = require('./src/htmlEscape')
// 向外暴露需要的成员
 module.exports = {
   ...data,
   ...escape
 }
