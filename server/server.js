const express = require('express')
const mongoose = require('mongoose')  //方便数据库与服务器连接

//链接mongo 并且使用demoDB
const DB_URL = 'mongodb://127.0.0.1:27017/demoDB'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('mongo success')
})

//操作数据库
//创建类似于mysql的表，mongo里有文档、字段的概念
const User = mongoose.model("user", new mongoose.Schema({
  user:{type:String,require:true},
  age:{type:Number,require:true}
}))
//新增数据
// User.create({
//   user:'xiaohua',
//   age:12
// },function(err, doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })
//更新数据
// User.update({'user':'xiaohua'},{'$set':{age:26}},function(err, doc){
//   if(!err){
//     console.log(doc)
//   }
// })







const app = express()   //新建app

//删除数据
// User.remove({
//   age:18
// },function(err, doc){
//   if(!err){
//     console.log(doc)
//   }
// })

app.get('/',function(req, res){   //获取数据
  res.send("<h1>Hello</h1>")   //res.send res.json res.sendfile
})

app.get('/data', function(req, res){
  //查找数据
  // User.find({},function(err, doc){
  //   return res.json(doc)
  // })
  // User.find({user:'xiaohua'},function(err, doc){
  //   return res.json(doc)
  // })
  User.findOne({user:'xiaohua'},function(err, doc){ //查找第一条吧，查到了之后就不管了
    return res.json(doc)
  })

  // res.json({name:'imooc 123', type:'it'})
})

app.listen(9093,function(){
  console.log("node app start at port 9093");
})
