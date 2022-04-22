const express = require('express')
const app = express()
// 除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过express.json()这个中间件，解析表单中的json格式的数据
app.use(express.json())
app.get('/',(req,res)=>{
  // 在服务器，可以使用req.body这个属性，来接受客户端发送的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
  console.log(req.body)
  res.send(req.body)
})
// 定义错误中间件，捕获整个项目的异常错误，从而房子程序崩溃
app.use((err,req,res,next)=>{
  res.send('Error：' + err.message)
})
app.listen(8080,function(){
  console.log('sever running at http://127.0.0.1:8080')
})
