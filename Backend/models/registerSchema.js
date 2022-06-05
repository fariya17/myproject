const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({

    userName:
    {
        type: String,
        required: true
    } ,
    email: {
        type: String,
        required: true

    }, 
    password: {
        type: String,
        required: true,
        minLength: 8

    }, 
    confirmPassword:
    {
        type: String,
        required: true,
        minLength: 8
    },
    mobile:{
        type: Number,
        required: true,
        minLength: 11,
        unique: true

    },
    role:{
        type: String,
        required: true,
        default: "User"
        
    }

})

const Register = mongoose.model('REGISTER',registerSchema);

module.exports = Register;
