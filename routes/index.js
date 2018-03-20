var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('coucou-pug', { sayHello: 'Hello buddy', title: 'Yolo' })
})

module.exports = router
