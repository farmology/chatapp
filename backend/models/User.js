const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Can't be blank"]
    },
    email: {
        type: String, 
        lowercase: true,
        unique: true,
        required: [true, "Can't be blank"],
        index: true, 
        validate: [isEmail, "Invalid email"]
    },
    password: {
        type: String, 
        required: [true, "Can't be blank"]
    }, 
    picture: {
        type: String, 
    }, 
    newMessages: {
        type: Object,
        default: {}
    },
    status: {
        type: String, 
        default: 'Online'
    },

}, {minimize: false});

UserSchema.statics.findByCredentials = async function(email, password) {
    const user = await User.findOne({email});
    if(!user) throw new Error('Invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) = throw new Error('Invalid email or password');
    return user;
}

const User = mongoose.model('User', UserSchema);

module.exports = User