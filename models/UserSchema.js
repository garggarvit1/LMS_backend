const mongoose = require('mongoose');

const User = mongoose.Schema({
    username : {type:String, required: true, unique: true},
    email:{type:String,required:true,unique:true},
    password: {type:String, required: true},
    type:{type:String,default:"user" },
})

const UserModel = mongoose.model("User",User);

module.exports = UserModel;