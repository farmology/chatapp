const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.2ue4rui.mongodb.net/?retryWrites=true&w=majorityvxc`, () => {
    console.log('mongodb connection successful')
})