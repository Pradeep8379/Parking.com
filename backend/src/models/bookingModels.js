const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId;

const bookingSchema = new mongoose.Schema({
    user: {
        type: objectId,
        ref: 'signUp'
    },
    parkingSpot: {
        type: objectId,
        ref: 'parking'
    },
    name: {
        type: String,
        require: true
    },
    licensePlateNumber: {
        type: String,
        require: true
    },
    startDate: {
        type: Date,
        require: true,
        default: new Date()
    },
    endDate: {
        type: Date,
        require: true,
        default: 24 * 60 * 60 * 1000 
    },

    amount: {
        type: Number,
        require: true,

    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid'],
        default: 'pending'
    }



}, { timestamps: true });

module.exports = mongoose.model('bookings', bookingSchema);