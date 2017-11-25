const opn = require('opn');

const eventHandler = {
	processClick: (obj, options) => {
		opn('https://www.npmjs.com/')
	},
	processTimeout: (obj, options) => {
		opn('https://nodejs.org/en/')
	}
};

module.exports = eventHandler;
