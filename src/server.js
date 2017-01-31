var express = require('express');

var app = express();

app.engine('jsx', require('express-react-views').createEngine());

app.set('views', './views');
app.set('view engine', 'jsx');

app.get('/', function (req,res) {
  res.status(200).send('ok')
  res.render('landingPage', { title: 'Standups and Retros' });
})

var server = app.listen(3001, function () {
});
module.exports = server;
