var express = require('express');

var app = express();

app.get('/json-data', function (req, res) {
  res.json({name: 'Freewind'});
});

app.get('/jsonp-data', function (req, res) {
  res.jsonp({name: 'Freewind'});
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});