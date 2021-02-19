const mongoose = require('mongoose');

const userTable = new mongoose.Schema({
    user: { type: String, required: true, minlength: 3, maxlength: 50 },
    password: { type: String, required: true, minlength: 6, maxlength: 100},
    name: { type: String, required: true, minlength: 3, maxlength: 100  },

});

mongoose.model('userList', userTable);