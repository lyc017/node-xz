const express = require('express')
// 创建路由对象
const router = express.Router()
// 挂在具体路由
router.get('/user/list', (req,res)=>{
  res.send('Get user list')
})
router.post('/user/detail', (req,res)=>{
  res.send('user detail')
})

module.exports= router
