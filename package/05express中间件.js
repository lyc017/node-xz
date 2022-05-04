const express = require('express')
const app = express()

//注册路由模块
app.use(function(req,res,next){
  req.status = '2'
  next()
})

const nme = function(req,res,next){
  req.status = '1'
  console.log(req)
  next()
}
app.get('/user/list',nme, (req,res)=>{
  res.send(req.status)
})
app.get('/user/detail', (req,res)=>{
  res.send(req.status)
})

app.listen(8080,function(){
  console.log('sever running at http://127.0.0.1:8080')
})
