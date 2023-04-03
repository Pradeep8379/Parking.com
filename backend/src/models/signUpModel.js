const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    role:{
        type : String,
        enum :['owner','user'],
        default : 'user',
    }
}, { timestamps: true });

module.exports = mongoose.model('signUp', signUpSchema);