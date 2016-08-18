import chalk from 'chalk';
import bluebird from 'bluebird';

import model from './proxy.model';
import connection from './proxy.connection';
import modelFactory from './proxy.model-factory';
import { mongoose as dbManager } from './proxy.adapter';

dbManager.Promise = bluebird;


dbManager.connection.on('open', function (ref) {
	console.log(chalk.green('Connected to mongo server!', ref));
});

dbManager.connection.on('close', function (ref) {
	console.log(chalk.blue('Closing connection to mongo server!', ref));
});
dbManager.connection.on('error', function (err) {
	console.log(chalk.bold.red('Could not connect to mongo server!'));
	console.log(chalk.red(err));
});

export default module.exports;

// TODO remove the module.exports

module.exports = {
	model,
	connection,
	modelFactory,
	dbManager
};