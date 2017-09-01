/**
	Common testing utilities.
*/

const expect = require('chai').expect;
const sinon = require('sinon');

module.exports = {
	error: new Error('some error'),
	mockHandleError: controller => {
		sinon.stub(controller, 'handleError');
	},
	handlesErrors: (controller, promise) => {
		return promise.then(() => {
			expect(controller.handleError).to.have.been.calledWith(module.exports.error);
		});
	}
};
