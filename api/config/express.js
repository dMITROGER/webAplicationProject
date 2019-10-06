

// load the module dependencies----------------------------------------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

// define the routes
const apiRoutes = require('../app/routes/index.server.routes');

// create a new express app
const app = express();

// configure the session middleware ------------------------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize()); //bootstrapping the Passport module
app.use(passport.session()); //keep track of your user's session

// load the routing files
app.use('/api', apiRoutes);

// export the express application instance
module.exports = app;