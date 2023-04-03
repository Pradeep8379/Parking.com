const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId;

const parkingSchema = new mongoose.Schema({
    name:{
       
        type : String,
        require : true,
    },
    address:{
        type : String,
        require : true,
    },
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    },
    available:{
        type : Boolean,
        default : true
    },
    createdBy:{
        type : objectId,
        ref: 'signUp'
    },
}, { timestamps: true });

module.exports = mongoose.model('parking', parkingSchema);