const mongoose = require('mongoose');
const Image = mongoose.model('image');
module.exports.upload = (req, res) => {
    //Promises return 400 as they're likely to expose user error, try/catch is likely to expose code bugs
    try{
        const image = new Image();
        image.id = req.body.id;
        image.userId = req.body.userId;
        image.title = req.body.title;
        image.description = req.body.description;
        image.imageBase64 = req.body.imageBase64;
        image.save().then(() => {
            res.status(200).json(image.id);
        }).catch((err) => {
            res.status(400).json({'errorResponse':{'errorMessage':err.message}});
        });
    }
    catch(err){
        res.status(500).json({'errorResponse':{'errorMessage':err.message}});
    }
};

module.exports.update = async (req, res) => {
    //Promises return 400 as they're likely to expose user error, try/catch is likely to expose code bugs

        jsonUpdate = {
            title: req.body.title,
            description: req.body.description
        }
        Image.findOneAndUpdate({'id':req.body.id}, jsonUpdate, {new: false}).then(() => {
            res.status(200).json(image.id);
        })
}.catch((err) => {
    res.status(400).json({'errorResponse':{'errorMessage':err.message}});
});

module.exports.delete = (req, res) => {
    //Promises return 400 as they're likely to expose user error, try/catch is likely to expose code bugs
    try{
        const image = new Image();
        image.id = req.body.id;
        image.userId = req.body.userId;
        image.title = req.body.title;
        image.description = req.body.description;
        image.imageBase64 = req.body.imageBase64;
        image.save().then(() => {
            res.status(200).json(image.id);
        }).catch((err) => {
            res.status(400).json({'errorResponse':{'errorMessage':err.message}});
        });
    }
    catch(err){
        res.status(500).json({'errorResponse':{'errorMessage':err.message}});
    }
};

module.exports.fetch = (req, res) => {
    Image.findOne({'id': req.params.id}).select('-_id').exec().then((img) => {
        res.status(200).json(img);
    }).catch((err) => {
        res.status(400).json({'errorResponse':{'errorMessage':err.message}});
    });
};

module.exports.fetchAll = (req, res) => {
    Image.find().select('-_id').exec().then((img) => {
        res.status(200).json(img);
    }).catch((err) => {
        res.status(400).json({'errorResponse':{'errorMessage':err.message}});
    });

};