// const express = require('express')
// const app = express()
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
const mysql = require('mysql')
const db = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'admin123',
  database:'my_db_01'
})
const sqlstr ='delete from users where id=?'
db.query(sqlstr,45,(err,result)=>{
  if (err) return console.log(err.message)
  if (result.affectedRows == 1) {4
    console.log('删除数据成功')
  }
})


// const user = {id:47,username:'bbb',password:'1111'}
// const sqlstr ='update users set ? where id=?'
// db.query(sqlstr,[user,user.id],(err,result)=>{
//   if (err) return console.log(err.message)
//   if (result.affectedRows == 1) {4
//     console.log('更新数据成功')
//   }
// })



// const user = {id:47,username:'aaa',password:'000'}
// const sqlstr ='update users set username=?,password=? where id=?'
// db.query(sqlstr,[user.username,user.password,user.id],(err,result)=>{
//   if (err) return console.log(err.message)
//   if (result.affectedRows == 1) {
//     console.log('更新数据成功')
//   }
// })

// const user = {username:'ll',password:'zs1234'}
// const sqlstr ='insert into users set ?'
// db.query(sqlstr,user,(err,result)=>{
//   if (err) return console.log(err.message)
//   if (result.affectedRows == 1) {
//     console.log('插入数据成功')
//   }
// })


// const sqlstr = 'insert into users (username,password) values (?,?)'
// db.query(sqlstr,[user.username,user.password],(err,result)=>{
//   console.log(123)
//   console.log(result)
//   if (err) return console.log(err.message)
//   if (result.affectedRows == 1) {
//     console.log('插入数据成功')
//   }
// })

// db.query('select * from users',(err,result)=>{
//   if (err) return console.log(err.message)
//   console.log(result)
// })
