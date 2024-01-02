const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    
    // Extracting the JWT token from the Authorization header
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try {
        // Verifying the JWT token using the JWT_SECRET
        const decoded = jwt.verify(jwtToken, JWT_SECRET);

        // Checking if the decoded token contains a 'username' field
        if (decoded.username) {
            req.username = decoded.username; // Setting the 'username' in the request object
            next(); // Proceeding to the next middleware or route handler
        } else {
            res.status(403).json({
                message: "You are not a valid user" // Sending a 403 Forbidden response if the token doesn't contain a username
            });
        }
    } catch (e) {
        res.status(403).json({
            message: "Invalid token" // Handling errors (e.g., invalid token format) with a 403 Forbidden response
        });
    }
}

module.exports = userMiddleware;
