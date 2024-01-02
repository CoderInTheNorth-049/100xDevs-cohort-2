// Middleware for handling auth

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    
    // Extracting the JWT token from the Authorization header
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try {
        // Verifying the JWT token using the JWT_SECRET
        const decoded = jwt.verify(jwtToken, JWT_SECRET);

        // Checking if the decoded token contains a 'username' field
        if (decoded.username) {
            next(); // Allowing access to the next middleware or route handler
        } else {
            res.status(403).json({
                message: "You are not an Admin" // Sending a 403 Forbidden response if the token doesn't contain a username
            });
        }
    } catch (e) {
        res.json({
            message: "incorrect input" // Handling errors (e.g., invalid token format) with a response message
        });
    }
}

module.exports = adminMiddleware;
