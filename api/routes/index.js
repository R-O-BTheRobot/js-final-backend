const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');
const ctrlImage = require('../controllers/image');
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
router.put('/upload', ctrlImage.upload);
router.patch('/update', ctrlImage.upload);
router.delete('/delete', ctrlImage.upload);
router.get('/image/', ctrlImage.fetchAll);
router.get('/image/:id', ctrlImage.fetch);

module.exports = router;