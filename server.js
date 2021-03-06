'use strict';

var express = require('express');
var routes = require('./app/routes.js');
var app = express();
require('dotenv').load();

routes(app);

app.use(express.static('public'));
app.set('views', process.cwd() + '/public');

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port + '...');
});
