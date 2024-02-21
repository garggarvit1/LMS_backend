const mongoose=require('mongoose');
const courseSchema=require('../models/CourseSchema');

exports.createCourse=async(req,res)=>{
    const courseData=req.body;
    try{
        const newCourse=await courseSchema.create(courseData)
        .then(()=>{res.status(200).json({message:"COURSE CREATED"})})
    }catch(err){
        console.log(err);
    }
}