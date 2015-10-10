var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello world from the express server')
});

app.listen(3000);
console.log('server running at port 3000');