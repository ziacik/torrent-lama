class ControllerUtil {
	constructor(errors, logger, store) {
		this.errors = errors;
		this.logger = logger;
		this.store = store;
	}

	handleError(err, next) {
		this.logger.error(this, 'Controller method failed with', err);
		next(new this.errors.InternalServerError());
	}

	find(req, res, next) {
		return this.store.find({}).then(items => {
			res.send(items);
			next();
		}).catch(err => this.handleError(err, next));
	}

	add(req, res, next) {
		return this.store.insert(req.body).then(inserted => {
			res.send(201, inserted);
			next();
		}).catch(err => this.handleError(err, next));
	}
}

module.exports = ControllerUtil;
