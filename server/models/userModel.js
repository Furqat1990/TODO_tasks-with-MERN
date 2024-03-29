const { Schema, model } = require('mongoose');

const userSchema = Schema({
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [true, 'Email is required'], unique: true },
    password: { type: String, required: [true, 'Password is required'] }
},
    { timestamps: true }
);

module.exports = model('User', userSchema);