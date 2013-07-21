var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  fs.readFile('./index.html', function (err, data) {
  //data.toString('utf-8');  
  response.send(data.toString());
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
