const mongoose = require('mongoose');
const courseSchema = require('../models/CourseSchema');

exports.getCourseData = async (req,res) => {
    // try {
    //     const db = mongoose.connection;
    //     const collection = db.collection('courseData'); // Replace 'courseData' with your collection name
    //     const data = await collection.find({}).toArray();
    //     res.send(data);
    // } catch (err) {
    //     console.log(err);
    // }
    try{
        const courses=await courseSchema.find();
        res.status(200).json({courses});
    }catch(err){
        console.log(err);
    }
}