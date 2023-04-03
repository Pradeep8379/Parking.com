const express = require('express');
const router = express.Router();
const userController = require('../controllers/signupController.js');
const paymentController = require('../controllers/paymentController.js');

// signUp
router.post('/signUp', userController.createUser);
router.post('/login', userController.userLogin);
router.post('/orders', paymentController.orders);
router.post('/verify', paymentController.verify);



module.exports = router;