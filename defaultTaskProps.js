const path = require('path');
const iconName = 'icon.jpg';

const defaultTaskProps = {
	icon: path.resolve(__dirname, 'assets', iconName),
	wait: true
};

module.exports = defaultTaskProps;
