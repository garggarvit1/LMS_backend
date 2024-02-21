const mongoose = require('mongoose');
const userSchema = require('../models/UserSchema');

exports.authenticateUser = async (req,res) => {
    const userData = req.body;
    try {
        const authenticate = await userSchema.findOne({"username": userData.username});
        console.log(authenticate);
        if(authenticate == null){
            res.send("User not found!");
        }
        else if(userData.password === authenticate.password){
            res.status(200).json({type:authenticate.type,message: "Login Successful"});            
        }
        else{
            res.send("Invalid Credentials");
        }
    } catch (err) {
        console.log(err);
        res.send("Some kind of error");
    }
}