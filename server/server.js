'use strict'; 

const express = require('express');
const {appsRoutes} = require('./routes/routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/apps', appsRoutes);

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});