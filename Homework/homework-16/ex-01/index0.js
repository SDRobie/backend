var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();

app.use(bodyParser.json());
app.use ('/', routes);

app.listen(3000, function(){
  console.log('Listening on port 3000...');
});
