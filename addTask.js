const dataStore = require('./dataStore');
const defaultTaskProps = require('./defaultTaskProps');
const prompt = require('prompt');
let tasks = require('./tasks.json');

prompt.start();

const onErr = (err) => {
	console.log(err);
	return 1;
};

const properties = [
    {
      name: 'title', 
      validator: /^[a-zA-Zа-яА-Я\s\-]+$/,
      warning: 'Title must be only letters, spaces, or dashes'
    },
    {
      name: 'message', 
    },
    {
      name: 'hours', 
      validator: /2[0-3]|1[0-9]|0[0-9]|[^0-9][0-9]/,
      warning: 'Hours must be only two integers, e.g. 18'
    },
    {
      name: 'minutes', 
      validator: /[0-5][0-9]/,
      warning: 'Minutes must be only two integers, e.g. 18'
    },
    {
      name: 'seconds', 
      validator: /[0-5][0-9]/,
      warning: 'Seconds must be only two integers, e.g. 18'
    },
];

prompt.get(properties, (err, result) => {
	if (err) { return onErr(err); }
	console.log('Task data received');
	console.log('Title: ' + result.title);
	console.log('Message: ' + result.message);
	console.log('Time: ' + result.hours + ":" + result.minutes + ":" + result.seconds);
	
	const newTask = {
		time: {
			hours: result.hours,
			minutes: result.minutes,
			seconds: result.seconds
		},
		props: {
			'title': result.title,
			'message': result.message,
			'icon': defaultTaskProps.icon,
			'wait': defaultTaskProps.wait
		}
	};

	tasks[result.title] = newTask;
	dataStore(tasks);
});
