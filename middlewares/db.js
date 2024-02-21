const mongoose = require('mongoose');

exports.connectToDB = ()=>{
    // mongoose.connect("mongodb+srv://garggarvit12:garg1234@cluster0.7bembvg.mongodb.net/lms?retryWrites=true&w=majority")
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to DB");
    })
}



// const mongoose=require('mongoose');

// const connectToDB =  mongoose.connect("mongodb+srv://garggarvit12:garg1234@cluster0.7bembvg.mongodb.net/lms?retryWrites=true&w=majority")
//                          .then(()=>{console.log("database connected");})
//                           .catch(()=>{console.log("database not connected")})


// exports.connectToDB;
