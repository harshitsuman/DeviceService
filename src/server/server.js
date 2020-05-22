var app = require('express')();

const cors = require('cors');
app.use(cors());
app.options('*', cors());

const schoolDeviceApi = require('../api/schoolDevice');
const parentDeviceApi = require('../api/parentDevice');

app.use(schoolDeviceApi);
app.use(parentDeviceApi);

module.exports = app;