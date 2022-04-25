const express = require('express')
const app = express()
const qs = require('querystring')

app.use((req,res,next)=>{
  let str = ''
  req.on('data', (chunk) =>{
    str += chunk
  })
  req.on('end', () =>{
    const body = qs.parse(str)
    req.body = body
    next()
    console.log(body)
  })
})
app.get('/',(req,res)=>{
  res.send(req.body)
})

app.listen(8080,function(){
  console.log('sever running at http://127.0.0.1:8080')
})
