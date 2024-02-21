const express = require('express');
const mongoose = require('mongoose');
const db = require('./middlewares/db');
const createUser = require('./controllers/createUser');
const authenticateUser = require('./controllers/authenticateUser');
const getCourseData = require('./controllers/getCourse');
const cors= require('cors');
const createCourses=require('./controllers/createCourse');
// const courseDataId=require('./controllers/getCourseId');
const courseRoute=require('./controllers/getCourseId')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
db.connectToDB();

app.get("/",(req,res)=>{
    res.send("Welcome to the front page");
})

app.post("/create",createUser.createUser);
app.post("/login",authenticateUser.authenticateUser);

app.post("/createcourse",createCourses.createCourse)
app.get("/courses",getCourseData.getCourseData);
// app.get('/getcourse/:id',courseDataId.courseData)
app.use('/api',courseRoute)

app.listen("3001",()=>{
    console.log("Server running on port 3001");
})




// const express=require('express');
// const mongoose=require('mongoose');


// const app=express();
// app.use(express.json());
