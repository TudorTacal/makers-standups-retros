var express = require('express');
var app = express();

app.get('/', function (req,res) {
  res.status(200).send('ok')
})

var server = app.listen(3001, function () {
});
module.exports = server;
