var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/:name', function (req, res, next) {
  res.send('Hi ! My name is ' + req.params.name)
})

router.delete('/:id(\\d+)', function(req, res, next) {
  res.send('Hey it\'s a DELETE ID ' + req.params.id)
})

module.exports = router;
