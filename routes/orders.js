var express = require('express');
var router = express.Router();

var order = require('../core_modules/orders');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
