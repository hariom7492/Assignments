const {Admin, User, Course }= require('../db/index')
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: 'user ka data galat hai' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server ki galti hai apnin nahi hai' });
  }
}

module.exports = userMiddleware;
