const express = require('express')
const app = express()
const session = require('express-session')
app.use(session({
  secret:'itheima',
  resave:false,
  saveUninitialized:true
}))
app.use(express.urlencoded({extended: false}))
// 存数据
app.post('/api/login',(req,res)=>{
  if (req.body.usename !== 'admin' || req.body.password !== '12345'){
    return res.send({
      status:1,
      msg:'登录失败'
    })
  }
  req.session.user = req.body // 用户信息
  req.session.isLogin = true // 用户的登录状态
  res.send({
    status:0,
    msg:'登录成功'
  })
})
// 取数据
app.get('/api/username',(req,res)=>{
  if (req.session.isLogin) {
    return res.send({
      status:1,
      mag:'fail'
    })
  }
  res.send({
    status:0,
    message:'success',
    username: req.session.user.username
  })
})
// 退出登录
app.post('/api/logout',(req,res)=>{
 req.session.destroy()
  res.send({
    status:0,
    message:'退出成功'
  })
})

// const qs = require('querystring')
//
// app.use((req,res,next)=>{
//   let str = ''
//   req.on('data', (chunk) =>{
//     str += chunk
//   })
//   req.on('end', () =>{
//     const body = qs.parse(str)
//     req.body = body
//     next()
//     console.log(body)
//   })
// })
// app.get('/',(req,res)=>{
//   res.send(req.body)
// })
//
// app.listen(8080,function(){
//   console.log('sever running at http://127.0.0.1:8080')
// })
