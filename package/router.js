const express = require('express')
// 创建路由对象
const router = express.Router()
// 挂在具体路由
router.get('/jsonpmethods', (req,res)=>{
  const funcName = req.query.callback
  const data={name:'xz', age:22}
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  res.send(scriptStr)
})

router.post('/getname', (req,res)=>{
  res.send({
    status:0,
    msg: 'GET请求成功',
    data:req.body
  })
})

router.get('/getname', (req,res)=>{
  res.send({
    status:0,
    msg: 'GET请求成功',
    data:req.query
  })
})


router.get('/user/list', (req,res)=>{
  res.send('Get user list')
})
router.post('/user/detail', (req,res)=>{
  res.send('user detail')
})

module.exports= router
