const dataStore = require('./dataStore');
const eventHandler = require('./eventHandler');
const notifier = require('node-notifier');
const settings = require('./settings');
let tasks = require('./tasks.json');

const checkTime = (time, taskID) => {
	let currentHour = time.getHours();
	let currentMinute = time.getMinutes();
	let currentSecond = time.getSeconds();

	let taskHour = tasks[taskID].time.hours;
	let taskMinute = tasks[taskID].time.minutes;
	let taskSecond = tasks[taskID].time.seconds;

	if (taskHour ==  currentHour && 
		taskMinute ==  currentMinute &&
		taskSecond ==  currentSecond) {
		return true;
	}

	return false;
}

const timerId = setInterval(() => {
  	let now = new Date();

  	process.stdout.write("Current time is: " + now);
	setTimeout(() => {
		process.stdout.clearLine();
	}, 900);
	process.stdout.cursorTo(0);

	for (let task in tasks) {
		let timeMatch = checkTime(now, task);
		if (timeMatch) {
			notifier.notify(tasks[task].props);
			delete tasks[task];
		}
	}
}, settings.workingIntervalSec);

console.log("Running timer");

setTimeout(() => {
	console.log("Timer was stopped");
	clearInterval(timerId);
	dataStore(tasks);
}, settings.workingTimeSec);

process.on('SIGINT', () => {
  	console.log('Goodbye!');
  	process.exit(2);
});

notifier.on('click', (obj, options) => {
  	eventHandler.processClick(obj, options);
});

notifier.on('timeout', (obj, options) => {
  	eventHandler.processTimeout(obj, options);
});
