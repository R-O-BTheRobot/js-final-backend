const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('user');
module.exports.register = (req, res) => {
    const user = new User();
    user.name = req.body.name;      //required through API
    user.email = req.body.email;    //required through API
    user.setPassword(req.body.password);    //required through API
    user.save().then(() => {
        const token = user.generateJwt();
        res.status(200);
        res.json({
            token: token
        });
    });
};
module.exports.login = (req, res) => {
    passport.authenticate('local', (err, user, info) => {
// If Passport throws/catches an error
        if (err) {
            console.log(err);
            res.status(200).send('testets');
            return;
        }
// If a user is found
        if (user) {
            const token = user.generateJwt();
            res.status(200);
            res.json({
                token: token
            });
        } else {
// If user is not found
            res.status(401).json(info);
        }
    }, {})(req, res);
};