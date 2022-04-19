const http = require('http')
const sever = http.createServer()
sever.on('request',function(req,res){
  const str = `your request请求 url is ${req.url},method方法 is  ${req.method}`
  res.setHeader('Content-type','text/html;charset=utf-8') // 解决中文乱码
  res.end(str)
})
sever.listen(8080,function(){
  console.log('sever running at http://127.0.0.1:8080')
})
