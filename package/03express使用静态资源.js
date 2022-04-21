const express = require('express')
const app = express()

app.use(express.static('./src'))

app.listen(8080,function(){
  console.log('sever running at http://127.0.0.1:8080')
})
