const fs = require('fs')
const path = require('path')
// 定义正则表达式 s匹配空字符，S匹配非空字符 *匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
const regJs = /<script>[\s\S]*<\/script>/


fs.readFile(path.join(__dirname,'index.html'),'utf8',function(err,datastr){
  if (err) {
    return console.log('文件读取失败！' + err.message)
  }
  resoveJs(datastr)
  resoveCss(datastr)
  resoveHtml(datastr)
})

function resoveCss(htmlStr) {
  const r1 = regStyle.exec(htmlStr)
  const newCss = r1[0].replace('<style>','').replace('</style>','')
  fs.writeFile(path.join(__dirname,'html/index.css'),newCss,err =>{
    if (err) {
      return console.log('文件写入失败！' + err.message)
    }
    console.log('css文件写入成功！')
  })
}
function resoveJs(htmlStr) {
  const r2 = regJs.exec(htmlStr)
  const newJs = r2[0].replace('<script>','').replace('</script>','')
  fs.writeFile(path.join(__dirname,'html/index.js'),newJs,err =>{
    if (err) {
      return console.log('文件写入失败！' + err.message)
    }
    console.log('js文件写入成功！')
  })
}
function resoveHtml(htmlStr) {
  const newHtml = htmlStr
    .replace(regStyle,'<link rel="stylesheet" href="./index.css">')
    .replace(regJs,'<script src="./index.js"></script>')

  fs.writeFile(path.join(__dirname,'html/index.html'),newHtml,err =>{
    if (err) {
      return console.log('文件写入失败！' + err.message)
    }
    console.log('html文件写入成功！')
  })
}
