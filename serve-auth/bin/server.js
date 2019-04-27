"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var singleton = require('./kernel/singleton');
singleton.setExpressApp(app);
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
require('./actions');
var port = 3000;
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
