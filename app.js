var express = require('express')
var app = express()
var config = require('./config/index')
var index = require('./router')

app.use('/',index)

var server = app.listen(config.port, function () {
  var port = server.address().port
  console.log('Example app listening at '+ port)
});