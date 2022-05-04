const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
const secretkey = 'ithema No1 ^_^'
app.use(express.urlencoded({extended: false}))
// // 注册将JWT字符串解析还原成JSON对象的中间件
app.use(expressJWT({secret: secretkey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))
// // 只要配置成功了express-jwt这个中间件，就可以吧解析出来的用户信息挂在到req.user上
// 配置错误中间件
app.use((err,req,res,next)=>{
    if (err.name === 'UnauthorizedError'){
        // 这次错误有token解析失败导致的
        return res.send({
            status:401,
            message:'无效的token'
        })
    }
    res.send({
        status:500,
        message:'未知错误'
    })
})
// // 存数据
app.post('/api/login',(req,res)=>{
  if (req.body.username !== 'admin' || req.body.password !== '12345'){
    return res.send({
      status:1,
      msg:'登录失败'
    })
  }
  // 最好不要加上密码，危险
  const token = jwt.sign({username:req.body.username },secretkey,{expiresIn: '10s'})
  res.send({
    status:0,
    msg:'登录成功',
    token
  })
})
// 有权限的API接口
app.get('/admin/username',(req,res)=>{
  console.log(req.user)
  res.send({
    status:0,
    message:'success',
    username: req.user
  })
})

app.listen(8080,function(){
    console.log('sever running at http://127.0.0.1:8080')
})
