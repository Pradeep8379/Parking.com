const Razorpay = require('razorpay');
const crypto = require("crypto");



module.exports.orders = (req, res) => {

    let instance = new Razorpay({ key_id: 'rzp_test_uR8CMipdmUVwl6', key_secret: '6jyahHxNybHGWu32M2FwjWup' })

    let options = {
        amount: req.body.amount * 100,  // amount in the smallest currency unit
        currency: "INR",
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.send({ code: 500, message: 'server error' })
        }
        return res.send({ code: 200, message: 'order created', data: order })
    });

}

module.exports.verify = (req, res) => {
    console.log(req.body);
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;


    var expectedSignature = crypto.createHmac('sha256', '6jyahHxNybHGWu32M2FwjWup')
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === req.body.response.razorpay_signature) {
        return res.send({ code: 200, message: 'valid signature' })
    } else {
        return res.send({ code: 500, message: 'Invalid signature' })
    }
}
