const mongoose = require('mongoose')  //方便数据库与服务器连接
//链接mongo 并且使用demoDB
const DB_URL = 'mongodb://127.0.0.1:27017/demoDB'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('mongo success')
})

module.exports = Mongo
