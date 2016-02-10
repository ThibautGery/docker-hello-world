
var express = require('express');
var mongoose = require('mongoose');

var uri = 'mongodb://ourDbRunning:27017/mongoose-shared-connection';
global.db = mongoose.createConnection(uri);

var routes = require('./routes');

var app = express();
app.get('/', routes.home);
app.get('/insert', routes.insert);
app.get('/name', routes.modelName);

app.listen(3004, function() {
  console.log('Server listening on port 3004');
  console.log('Sever successfully started.');
});
