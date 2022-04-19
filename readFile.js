const fs = require('fs')
fs.readFile('./test.txt','utf8',function(err, dataStr){
  console.log(err,'错误')
  console.log('------')
  console.log(dataStr,'正确')
})
fs.readFile('./test.txt','utf8',function(err, dataStr){
  if (err) {
    return console.log('文件读取失败！' + err.message)
  }
  console.log('文件读取成功！' + dataStr)
})
