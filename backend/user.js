const mongooseUser = require('mongoose');

const userSchema = new mongooseUser.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

module.exports = mongooseUser.model('User', userSchema);