const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken');
const imageSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageBase64: {
        type: String,
        required: true
    }
});

/*imageSchema.methods.save = function() { //TO-DO
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name,
            exp: parseInt(expiry.getTime() / 1000)
        },
        'secretKey'
    );
};*/
mongoose.model('image', imageSchema);