const signUpModel = require('../models/signUpModel');
const bcrypt = require('bcrypt');
const { onlyAplha, validateMobile, validateEmail, isValid, isValidRequestBody, isValidObjectId, isValidPassword } = require('../validation.js')

const createUser = async (req, res) => {
    const data = req.body;

    if (!isValidRequestBody(data)) {
        return res.status(400).send({ status: false, message: 'request body cant be empty' })
    }
    let { firstName, lastName, email, password, confirmPassword, phone } = data;

    if (!onlyAplha(firstName)) {
        return res.status(400).send({ status: false, message: 'Please enter valid firstname!' })
    }
    if (!onlyAplha(lastName)) {
        return res.status(400).send({ status: false, message: 'Please enter valid lastName!' })
    }
    if (!validateMobile(phone)) {
        return res.status(400).send({ status: false, message: 'Please enter valid Phonenumber!' })
    }
    if (!validateEmail(email)) {
        return res.status(400).send({ status: false, message: 'Please enter valid email!' })
    }
    if (!isValidPassword(password)) {
        return res.status(400).send({ status: false, message: 'Password length should be between 8 and 15' })
    }
    if (!isValidPassword(confirmPassword)) {
        return res.status(400).send({ status: false, message: 'Password length should be between 8 and 15' })
    }

    for (let char in password) {
        if (password[char] != confirmPassword[char]) {
            return res.status(400).send({ status: false, message: 'Passwords dont match!' })
        }
    }

    // using bcrypt for keeping passwords safe.

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword;
    // console.log(hashedPassword);

    let userBody = {
        firstName,
        lastName,
        email,
        password,
        phone
    }
    // console.log(userBody);
    let user = await signUpModel.create(userBody);
    return res.status(201).send({ status: true, message: 'success', data: user })
}

const userLogin = async (req, res) => {
    // console.log(req.body);
    let { email, password } = req.body;

    if (!isValidRequestBody(req.body)) {
        return res.status(400).send({ status: false, message: 'request body cant be empty' })
    }
    if (!validateEmail(email)) {
        return res.status(400).send({ status: false, message: 'Please enter valid email!' })
    }
    if (!isValidPassword(password)) {
        return res.status(400).send({ status: false, message: 'Password length should be between 8 and 15' })
    }


    let user = await signUpModel.findOne({ email })
    let verifiedUser = await bcrypt.compare(password, user.password)
    // console.log(verifiedUser);

    if (!verifiedUser) {
        return res.status(403).send({ status: false, message: 'invalid credentials' })
    }

    return res.status(200).send({ status: true, message: 'success', data: user })
}

module.exports = { createUser, userLogin }