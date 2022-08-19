var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// login route
router.post('/login' , () => {})



// signup route
router.post('/signup' , () => {})


module.exports = router;
