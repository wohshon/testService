var express = require('express');
var router = express.Router();
var ip = require("ip");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
     var clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
   console.log(clientIp);
  res.status(200).send("OK: "+ip.address()+" "+clientIp);
});

module.exports = router;
