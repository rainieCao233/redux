const mongoose = require('mongoose')  //方便数据库与服务器连接
//链接mongo 并且使用demoDB
const DB_URL = 'mongodb://127.0.0.1:27017/demoDB'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('mongo success')
})

const models = {
  user:{
    'user':{type:String,require:true},
    'pwd':{type:String,require:true},
    'type':{type:String,require:true},
    'avator':{type:String},
    'desc':{type:String}, //个人简介或职位简介
    'title':{type:String}, //职位名
    'company':{type:String}, 
    'money':{type:String}, 
  },
  chat:{

  }
}

for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel:function(name){
    return mongoose.model(name);
  }
}
