var express = require('express');
var router = express.Router();
var index = require ('../service/index.js')

// 设置跨域
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "POST,GET");
  res.header("X-Powered-By",' 3.2.1');
  next();
});

router.post('/getList', function (req, res) {
  let str = index.getTest()
  res.send(str)
})
module.exports = router