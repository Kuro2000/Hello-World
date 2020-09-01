const express = require('express');
const path = require('path');
const app = express();
const logger = require('./winston');

// Setup server
app.use(express.static(__dirname + '/clients'));
app.route('/*').get((req, res) => {
	res.sendFile(path.join(__dirname, '/clients/index.html'));
});

app.listen(3000, () => {
	logger.info('Server seed listening on port 3000!');
});