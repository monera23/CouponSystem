var express = require('express');
var router = express.Router();

var coupon = require('../core_modules/coupons');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
