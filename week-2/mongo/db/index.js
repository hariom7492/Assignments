const mongoose = require('mongoose');
async ()=>{
  await mongoose.connect("mongodb://localhost:27017/Sachin");
}
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  created_at: { type: Date, default: Date.now }
});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
  created_at: { type: Date, default: Date.now }
});
const Admin = mongoose.model('Admin', AdminSchema,'Admin');
const User = mongoose.model('User', UserSchema,'User');
const Course = mongoose.model('Course', CourseSchema,'Course');

module.exports = {
  Admin,
  User,
  Course
};