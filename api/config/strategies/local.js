const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../app/models/user.server.model');

// register the strategy
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (username, password, done) {
        User.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            // Return if user not found in db
            if (!user) {
                return done(null, false, {
                    message: 'User not found'
                });
            }
            // Return if password is invalid
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Password is wrong'
                });
            }
            // If credentials are correct, return that user object
            return done(null, user);
        })
    }
));
module.exports = passport;