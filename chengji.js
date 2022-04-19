const fs = require('fs')
fs.readFile(__dirname + '/成绩.txt','utf8',function(err, dataStr){
  if (err) {
    return console.log('文件读取失败！' + err.message)
  }
  const arrNew = []
  const arrOld = dataStr.split(' ')
  arrOld.forEach(item =>{
    arrNew.push(item.replace('=',':'))
  })
  const strNew = arrNew.join('\r\n')

  fs.writeFile('F:/idea_weixin/node/成绩ok.txt',strNew,function(err){
    if (err) {
      return console.log('文件写入失败！' + err.message)
    }
    console.log('文件写入成功！')
  })
})
