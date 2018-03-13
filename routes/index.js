var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_r5djZLubk2F9JBONkPSP6fMc');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project Lyra' });
});

router.get('/token', function(req,res, next){
  res.render('success', { title: 'Lyra' });
});

module.exports = router;
