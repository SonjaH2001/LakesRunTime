var express = require('express');
var router = express.Router();
var Lake = require('.../models/lakes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
