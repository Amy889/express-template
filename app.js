var express = require('express')
var app = express()
var config = require('./config/index')
var index = require('./router')
var bodyParser = require('body-parser')
// bodyParser需要放在设置路由之前设置，不然post到数据接受不到参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',index)

var server = app.listen(config.port, function () {
  var port = server.address().port
  console.log('Example app listening at '+ port)
});