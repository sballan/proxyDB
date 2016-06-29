module.exports = function proxifyInstance(strategy, instance){	
	const proxy = {
		_instance: instance,
		get doc() {
			return this._instance;
		},
		set doc(doc) {
			this.instance = doc;
			return this._instance;
		},
		get table() {
			return this._instance;
		},
		set table(table) {
			this._instance = table;
			return this._instance;
		}
	}

}