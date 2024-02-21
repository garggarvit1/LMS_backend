const mongoose=require('mongoose');
const courseSchema=require('../models/CourseSchema');
const router=require('express').Router();



router.get('/getCourse/:id',async(req,res)=>{
    let course;
    const id=req.params.id;
    try{
         course=await courseSchema.findById(id);
        res.status(200).json({course});
    }catch(err){
        console.log(err);
    }
})

router.put('/updateCourse/:id',async(req,res)=>{
    let courses;
    const id=req.params.id;
    const { course,teacher,rating,category,image,price,videoUrl1,videoUrl2,videoUrl3,videoUrl4}=req.body;
    try{
         courses=await courseSchema.findByIdAndUpdate(id,{ 
            course,
            teacher,
            rating,
            category,
            image,
            price,
            videoUrl1,
            videoUrl2,
            videoUrl3,
            videoUrl4
        });
        courses= await courses.save().then(()=>res.status(201).json({message:"Data Updated"}))
    }catch(err){
        console.log(err);
    }
})

router.delete('/deleteCourse/:id',async(req,res)=>{

    const id=req.params.id;
    try{
        await courseSchema.findByIdAndDelete(id)
        .then(()=>{res.status(201).json({message:"Deleted Successfully"})})
    }catch(err){
        console.log(err);
    }
})

module.exports=router;