const fs = require('fs')
const path = require('path')

const fpath = '/a/b/v/c/xz.html'
const fext = path.extname(fpath)
console.log(fext)
// const fullName = path.basename(fpath)
// console.log(fullName)
// const fullName2 = path.basename(fpath,'.html')
// console.log(fullName2)

// ../返回上一层
// const pathstr = path.join('/a','/b/c','../','/d/e')
// console.log(pathstr)
// const pathstr2 = path.join('/a','/b/c','../../','/d/e')
// console.log(pathstr2)
//
// fs.writeFile(path.join(__dirname, '/write.txt'),'utf8',function(err){
//   if (err) {
//     return console.log('文件写入失败！' + err.message)
//   }
//   console.log('文件写入成功！')
// })


