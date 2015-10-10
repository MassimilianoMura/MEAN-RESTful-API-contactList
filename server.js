var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request ')

   person1 = {
    name: 'Massi',
    email: 'massi@email.com',
    number: '111-111111'
  };

  person2 = {
    name: 'Ted',
    email: 'ted@email.com',
    number: '222-222222'
  };

  var contactList = [person1, person2];

  res.json(contactList)
})

app.listen(3000);
console.log('server running at port 3000');