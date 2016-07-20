'use strict';
var path = require('path');
var util = require('util');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var chalk = require('chalk');
var db = require('proxydb');
console.log('DB', db);
var app = express();

module.exports = app;

// Parse
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Log
app.use(function (req, res, next) {
    util.log(('---NEW REQUEST---'));
    console.log(util.format(chalk.red('%s: %s %s'), 'REQUEST ', req.method, req.path));
    console.log(util.format(chalk.yellow('%s: %s'), 'QUERY   ', util.inspect(req.query)));
    console.log(util.format(chalk.cyan('%s: %s'), 'BODY    ', util.inspect(req.body)));
    next();
})

app.get('/', function(req, res, next) {
	res.send({success:true})
});

app.use(function (req, res, next) {
	if (path.extname(req.path).length > 0) {
		res.status(404).end();
	} else {
		next(null);
	}
});

app.get('/users', function(req, res, next) {
	console.log(chalk.blue('Hit Users route'));
	var User = db.model('User');
	User.find({})
	.then(function(users) {
		res.send(users)
	})
	.catch(function(err) {
		console.log(chalk.red(err))
		next(err)
	})
});

// Error catching endware.
app.use(function (err, req, res, next) {
	console.error(chalk.magenta(err), `, next arg is of type: ${typeof next}`);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});
