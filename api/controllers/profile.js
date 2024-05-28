const mongoose = require('mongoose');
const User = mongoose.model('user');
module.exports.profileRead = (req, res) => {
// If no user ID exists in the JWT return a 401
    if (/*!req.auth._id*/ false) {
        res.status(401).json({
            message: 'UnauthorizedError: private profile'
        });
    } else {
// Otherwise continue
        User.findById(req.auth._id).exec(function(err, user) {
            res.status(200).json(user);
        });
    }
};