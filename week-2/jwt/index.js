const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Validate email format for the username
    const emailRegex = /[\\w_\\-\\.]+[@]+[a-z]+[\\.]+[a-z]{3}/;
    if (!emailRegex.test(username)) {
      return null; // Invalid email format
    }
  
    // Validate password length
    if (password.length < 6) {
      return null; // Password too short
    }
  
    // Generate JWT using the provided username and password
    const payload = { username, password };
    const token = jwt.sign(payload, jwtPassword);
  
    return token;
  }
  

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try {
      // Verify the token using the secret key
      jwt.verify(token, jwtPassword);
      return true; // Token is valid
    } catch (err) {
      return false; // Token is invalid, expired, or not verified
    }
  }
  

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    try {
      // Decode the payload without verifying authenticity
      const decodedPayload = jwt.decode(token);
      return decodedPayload; // Return decoded payload
    } catch (err) {
      return false; // Token is not a valid JWT format
    }
  }
  


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
