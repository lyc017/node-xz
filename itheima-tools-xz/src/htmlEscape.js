
// 转义html字符的函数
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, (match)=>{
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}
module.exports = {
  htmlEscape
}
