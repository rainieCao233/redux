const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()   //新建app

app.use(cookieParser()) // 解析cookie
app.use(bodyParser())  // 解析post过来的json

app.use('/user', userRouter)

app.listen(9093,function(){
  console.log("node app start at port 9093");
})
