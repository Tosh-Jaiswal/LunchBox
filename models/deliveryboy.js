const mongoose = require("mongoose")
const validator = require('validator')

const DeliveryBoy = mongoose.model('DeliveryBoy', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type : String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new error('password error')
            }
        }
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new error ('Please enter a valid mobile number.')
            }
        }
    },
    address: {
        type: String,
        required: true
    },
    vehicleDetail: {
        type: String,
        required: true
    },
    vehiclePic: {
        type: Buffer,
        required: true
    },
    drivingLicence: {
        type: String,
        required: true
    }
    
})

//const DeliveryBoy = mongoose.model('DeliveryBoy', deliveryboySchema)

module.exports = DeliveryBoy



