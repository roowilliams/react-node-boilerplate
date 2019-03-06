var express = require("express");
var router = express.Router();
var io = require("../sockets/api").io;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send({ data: "hello world" });
});

module.exports = router;
