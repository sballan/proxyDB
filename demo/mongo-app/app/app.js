'use strict';
const path = require('path');
const util = require('util');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

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

app.use('/api', function(req, res, next) {

});

app.use(function (req, res, next) {

	if (path.extname(req.path).length > 0) {
		res.status(404).end();
	} else {
		next(null);
	}

});

// Error catching endware.
app.use(function (err, req, res, next) {
	console.error(chalk.magenta(err), `, next arg is of type: ${typeof next}`);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});
