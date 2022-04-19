const express = require('express')
const sever = express()

sever.get('/user', (req,res)=>{
  console.log(req.query)
  res.send({name:'xz',age:30,gender:'男'})
})

sever.get('/userid/:id', (req,res)=>{
  console.log(req.params)
  res.send(req.params)
})

sever.post('/user', (req,res)=>{
  res.send('请求成功，但是暂无数据')
})

sever.listen(8080,function(){
  console.log('sever running at http://127.0.0.1:8080')
})
