/**
 * 
 * @file        server.js
 * @description application manifest
 * @author       Dmytro, Vitalii
 * @date        2019.03.10
 * 
 */

// often, the NODE_ENV environment variable is not properly set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// NOTE: must load Mongoose config before any other configurations, this is to let the other moduels be able to use the Mongoose models without loading them themselves; remember that JavaScript loads all vars into one global namespace, that was the reason node.js had to solve it via CommonJS modules
const config = require('./config/config');
const db = require('./config/mongoose');
const app = require('./config/express');
const passport = require('./config/passport');

app.listen(config.port);
module.exports = app;

console.log(`Server running at http://localhost:${config.port}/`);