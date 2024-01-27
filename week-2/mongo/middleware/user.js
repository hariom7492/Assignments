
const { Admin,User,Course } = require('../db/index'); 
async function userMiddleware(req, res, next) {
   // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username=req.body.username;
  const password=req.body.password;
  
  try {
    const user = await User.findOne({ username,email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid user authentication token.' });
    }
    req.user=user;
    next();
  } catch (error) {
    console.error('User authentication error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = userMiddleware;
