
const { Admin,User,Course } = require('../db/index'); 
async function adminMiddleware(req, res, next) {
const username=req.body.username;
const password=req.body.password;
  try {
    const admin = await Admin.findOne({ username,password});
    console.log(admin);
    if (!admin) {
      return res.status(401).json({ error: 'Invalid admin authentication .' });
    }
    req.admin=admin;
    next();
  } catch (error) {
    console.error('Admin authentication error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = adminMiddleware;