const itx = require('./itheima-tools-xz')

const time = itx.dateFormat(new Date())
console.log(time)
const htmlstr  = itx.htmlEscape('<h1 title="abc">123&nbsp;</h1>')
console.log(htmlstr)
