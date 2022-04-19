const fs = require('fs')
fs.writeFile('./write.txt','xz',function(err){
  if (err) {
    return console.log('文件写入失败！' + err.message)
  }
  console.log('文件写入成功！')
})
