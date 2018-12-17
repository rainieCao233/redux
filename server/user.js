const express = require('express')
const Router = express.Router()
const models = require("./model")
const User = models.getModel('user')
const Utils = require('Utility')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const _filter = {
  'pwd':0,
  "_v":0
}

Router.get('/list', function(req, res){
  User.find({}, function(err, doc){
    return res.json(doc)
  })
})

Router.get('/info', function(req, res){
  const {userid} = req.cookies
  if(!userid)
    return res.json({code: 1})
  User.findById({_id:userid}, _filter, function(err, doc){
    if(err)
     return res.json({code:1, msg:"后端出错"})
    if(doc){
      return res.json({code:0, data:doc})
    }
  })
})

Router.post('/register', function(req, res){
  console.log(req.body)
  const {user, pwd, type} = req.body
  User.findOne({user:user}, function(err, doc){
    if(doc)
      return res.json({code:1, msg:"用户名重复"})

    const userModel = new User({user, pwd:md5Pwd(pwd), type})
    userModel.save(function(err, doc){
      if(err)
        return res.json({code:1,msg:"后端出错了"})
      const {user, type, _id} = doc
      res.cookie('userid',_id)
      return res.json({code:0, data:{user, type, _id}})
    })
    // User.create({user, pwd:md5Pwd(pwd), type}, function(err, doc){
    //   if(err)
    //     return res.json({code:1,msg:"后端出错了"})
    //   return res.json({code:0})
    // })
  })
})

Router.post('/login', function(req, res){
  const {user, pwd} = req.body
  User.findOne({user:user,pwd:md5Pwd(pwd)}, _filter, function(err, doc){
    if(!doc)
      return res.json({code:1, msg:"用户名或密码错误"})
    res.cookie('userid',doc._id)
    return res.json({code:0, data:doc})
  })
})

function md5Pwd(pwd){
  const salt = 'idyasdidasjgdaiusashgdfau' + pwd
  return Utils.md5(Utils.md5(salt));
}

module.exports = Router
