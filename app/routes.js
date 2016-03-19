'use strict';

var multer = require('multer')
module.exports = function (app){
	app.get('/',function(req,res){
		res.sendFile('index.html');
	})
};
