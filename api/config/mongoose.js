

const config = require("./config");
const mongoose = require("mongoose");

mongoose.connect(config.db);
const mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'connection error:'));
mongoDB.once('open', () => {
    console.log(`Connected to MongoDB at ${config.db}`);
});

module.exports = mongoDB;