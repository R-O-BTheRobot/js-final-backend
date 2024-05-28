const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
14
const User = mongoose.model('user');
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email'
        },
        async function(username, password, done) {
            const user = await User.findOne({ email: username }, );
            if (!user) {
                return done(null, false, {
                    message: 'User not found'
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Password is wrong'
                });
            }
            return done(null, user);
        }
    )
);