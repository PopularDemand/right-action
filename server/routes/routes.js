var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Right Action',
    bundleName: 'home'
  });
});

module.exports = router;
