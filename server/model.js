const mongoose = require('mongoose')  //方便数据库与服务器连接
//链接mongo 并且使用demoDB
const DB_URL = 'mongodb://127.0.0.1:27017/demoDB'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('mongo success')
})

const model = {
  user:{
    'user':{type:String,require:true},
    'pwd':{type:String,require:true},
    'type':{type:String,require:true},
    'avatar':{type:String},
    'desc':{type:String},
    'title':{type:String}, // 职位名
    'company':{type:String},
    'money':{type:String}  // boss可提供多少钱
  },
  chat:{

  }
}

for(let m in model){
  mongoose.model(m, new mongoose.Schema(model[m]))
}

module.exports = {
  getModel:function(name){
    return mongoose.model(name);
  }
}
