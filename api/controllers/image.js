const mongoose = require('mongoose');
const Image = mongoose.model('image');
module.exports.upload = (req, res) => {
    const image = new Image();
    image.userId = req.body.userId;
    image.title = req.body.title;
    image.imageBase64 = req.body.imageBase64;
    image.save().then(() => {
        res.status(200).json(image._id);
    });
};

module.exports.fetch = (req, res) => {
    Image.findById(req.params.id).exec().then((img) => {
        res.status(200).json(img);
    });
};

module.exports.fetchAll = (req, res) => {
    Image.find().exec().then((img) => {
        res.status(200).json(img);
    });
};