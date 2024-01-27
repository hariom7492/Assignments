const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,User,Course } = require('../db/index');
const mongoose=require('mongoose');
const express=require('express');
const router = Router();
const app=express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/Sachin");
router.post('/signup', async (req, res) => {
   try {
      const username= req.body.username;
      const password= req.body.password;
      const email=req.body.email
      const newAdmin = new Admin({
        username,
        password,
        email
      });
      await newAdmin.save();
      res.status(201).json({ message:'Admin signup successful.' });
    } catch (error) {
      console.error('Admin signup error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }  
  });
  
router.post('/courses', adminMiddleware, async (req, res) => {
    try {
      if(req.admin){
        let title=req.body.title;
        let description=req.body.description;
      const newCourse = new Course({
        title,
        description,
        instructor: req.admin._id 
      });
      await newCourse.save();
  
      res.status(201).json({ message: 'Course creation successful.' });
    }
    else{
      console.log("aDmin not found");
        }
    } catch (error) {
      console.error('Course creation error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (error) {
      console.error('Fetch all courses error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;
