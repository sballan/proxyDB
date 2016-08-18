import { connection as ConnectionTemplate } from '../../proxyDb/strategy-templates';
import {
	makeConnection,
	openConnection,
	closeConnection
} from './proxy.adapter';

export default class ProxyConnection extends ConnectionTemplate {
	constructor(URI = 'mongodb://localhost:27017', dbName = 'proxyDb-test') {
		super(URI, dbName)
		this.dbConnection = makeConnection();
	}

	// TODO Promisify these functions
	open(cb) {
		return openConnection(this.dbConnection, this.URI, cb);
	}

	close(cb) {
		return closeConnection(this.dbConnection, cb);
	}

}

module.exports = ProxyConnection;