const express = require('express')
const Router = express.Router()

Router.get('/info', function(req, res){
  return res.json({code: 1});
})

Router.get('/register', function(req, res){
  
})

module.exports = Router
