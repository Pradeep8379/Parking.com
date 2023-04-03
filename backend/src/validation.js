const mongoose = require("mongoose");

const onlyAplha = function onlyAplha(value) {
    return /^[a-zA-Z/s]/.test(value);
}

const validateMobile = function validateMobile($phone) {
    var phoneReg = /^[6789]\d{9}$/;
    if (!phoneReg.test($phone)) {
        return false;
    } else {
        return true;
    }
}

const validateEmail = function validateEmail($email) {
    var emailReg = /^(\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3}))$/;
    if (!emailReg.test($email)) {
        return false;
    } else {
        return true;
    }
}

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length > 0) return true;
    return false;
};

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
};

const isValidPassword = function (password) {
    password = password.trim();
    if (password.length < 8 || password.length > 15) {
        return false;
    }
    return true;
};

const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId);
};


module.exports = { onlyAplha, validateMobile, validateEmail, isValid, isValidRequestBody, isValidObjectId, isValidPassword };