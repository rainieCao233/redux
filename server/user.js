const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const _filter = {'pwd':0,'_v':0}

Router.get('/info', function(req, res){
  const {userid} = req.cookies
  if(!userid)
    return res.json({code: 1});
  User.findOne({_id:userid}, _filter, function(err, doc){
    if(err)
      return res.json({code: 1, msg:"后端出错"});
    if(doc)
      return res.json({code: 0, data:doc});
  })
})

Router.get('/list', function(req, res){
  // User.remove({},function(err, doc){})
  User.find({}, function(req, doc){
    return res.json(doc);
  })
})

Router.post('/register', function(req, res){
  console.log(req.body)
  const {user, pwd, type} = req.body
  User.findOne({user},function(err, doc){
    if(doc)
      return res.json({code:1, msg:"用户名重复"})
    User.create({user, pwd:md5Pwd(pwd), type}, function(err, doc){
      if(err)
        return res.json({code:1, msd:'后端出错'})
      return res.json({code:0})
    })
  })
})

Router.post('/login', function(req, res){
  const {user, pwd} = req.body
  User.findOne({user, pwd:md5Pwd(pwd)},function(err, doc){
    if(!doc)
      return res.json({code:1, msg:"用户名不存在or密码错误"})
    res.cookie('userid',doc._id)
    return res.json({code:0, msg:"登录成功", data:doc})
  })
})

function md5Pwd(pwd){
  const salt = "xdjhgdsa8andaj"
  return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router
