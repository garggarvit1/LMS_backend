const mongoose = require('mongoose');
const userSchema = require('../models/UserSchema');

exports.createUser = async (req,res) => {
    const userData = req.body;
    try {
        const newUser = await userSchema.create(userData);
        res.send('User created successfully!');
    } catch (err) {
        console.log(err);
        if (err.code === 11000) {
            res.status(400).send('Username is already taken!');
        } else {
            res.status(500).send('Error creating user');
        }
    }
}