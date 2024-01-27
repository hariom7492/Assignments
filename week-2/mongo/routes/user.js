const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { Admin,User,Course } = require('../db/index');
const mongoose=require('mongoose');
const express=require('express');
const router = Router();
const app=express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/Sachin");
// Admin Routes
router.post('/signup', async (req, res) => {
  try {
    const username= req.body.username;
    const password= req.body.password;
    const email=req.body.email;
    const age=req.body.age;
    const newUser = new User({
      username,
      email,
      age
    });
    await newUser.save();
    res.status(201).json({ message:'User signup successful.' });
  } catch (error) {
    console.error('User signup error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }  
});
router.post('/courses', userMiddleware, async (req, res) => {
  try {
    if(req.user){
      let title=req.body.title;
      let description=req.body.description;
      let course=await Course.find({title});
      if(course){
        res.json({
        message:"course found!!"
        })
      }
      else{
        res.send("invalid course");
      }
  }
  else{
    console.log("aDmin not found");
      }
  } catch (error) {
    console.error('Course creation error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/courses', userMiddleware, async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    console.error('Fetch all courses error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
