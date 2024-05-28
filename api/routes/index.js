const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');
const express = require('express');
var { expressjwt: jwt } = require("express-jwt");
const router = express.Router();
const auth = jwt({
    secret: 'super_sekretny_klucz',
    userProperty: 'payload',
    algorithms: ['HS256']
});
// profile
router.get('/profile', auth, ctrlProfile.profileRead);
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
module.exports = router;