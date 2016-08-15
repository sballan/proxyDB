export default {
	proxifyInstance: dbInstance => {
		if (Array.isArray(dbInstance)) {
			return dbInstance.map(i => {
				return new this(i)
			})
		}

		return new this(dbInstance);
	},
	proxifyModel: (name, dbModel) => {

	},
	proxifySchema: (name, dbSchema) => {

	}

}