var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
     var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
   console.log(ip);
  res.status(200).send("OK");
});

module.exports = router;
