let express = require('express');
let router = express.Router();

const searchRoute = require('./search')
const users =require("./users");

router.user("/users", users)
router.use('/search', searchRoute)

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
