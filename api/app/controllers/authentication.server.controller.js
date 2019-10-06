


const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user.server.model');

module.exports.register = function (req, res) {

    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ "message": "All fields required" });
    }

    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.type = req.body.type;

    user.setPassword(req.body.password);

    user.save(function (err) {
        let token = user.generateJwt();
        if (err) {
            return res.status(400).send({
                message: err
            });
        }
        return res.status(200).json({
            "token": token
        });
    });

    console.log(`New user registered: ${user}`);
};

module.exports.login = function (req, res) {

    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ "message": "All fields required" });
    }

    passport.authenticate('local', function (err, user, info) {
        let token;

        // if passport thorws/catches an error
        if (err) {
            return res.status(404).json(err);
        }

        // if a user is found
        if (user) {
            token = user.generateJwt();
            console.log(`${user.type} - ${user.name} has logged in...`);
            return res.status(200).json({ "token": token });
        }
        // user is not found
        return res.status(401).json(info);
    })(req, res);
};