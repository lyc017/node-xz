const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}))
// 导入路由模块
const router= require('./router')
//注册路由模块
app.use('/api',router)

app.listen(8080,function(){
  console.log('sever running at http://127.0.0.1:8080')
})
