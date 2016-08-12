import chalk from 'chalk';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import schema from './proxy.schema';
import model from './proxy.model';
import instance from './proxy.instance';
import connection from './proxy.connection'

mongoose.Promise = bluebird;


mongoose.connection.on('open', function (ref) {
	console.log(chalk.green('Connected to mongo server!', ref));
});

mongoose.connection.on('close', function (ref) {
	console.log(chalk.blue('Closing connection to mongo server!', ref));
});
mongoose.connection.on('error', function (err) {
	console.log(chalk.bold.red('Could not connect to mongo server!'));
	console.log(chalk.red(err));
});

// export default {
// 	schema,
// 	model,
// 	instance,
// 	connection,
// 	get dbManager() {
// 		return mongoose;
// 	}
// }

module.exports = {
	schema,
	model,
	instance,
	connection,
	get dbManager() {
		return mongoose;
	}
};