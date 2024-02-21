const mongoose = require('mongoose');

exports.connectToDB = ()=>{
    
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to DB");
    })
}

