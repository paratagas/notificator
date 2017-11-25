const fs = require("fs");
const path = require('path');
const settings = require('./settings');
const dataFile = path.resolve(__dirname, settings.dataFilePath);

const dataStore = (dataJSON) => {
	fs.writeFileSync(dataFile, JSON.stringify(dataJSON), "utf8", (err, data) => {
        if (err) {
            console.log("Unable to store data");
            return;
        } else {
            console.log("Data successfully stored");
            return true;
        }
    });
};

module.exports = dataStore;
