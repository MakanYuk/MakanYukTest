var express = require('express');
var router = express.Router();

const searchRoute = require('./search')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/search', searchRoute)

module.exports = router;
