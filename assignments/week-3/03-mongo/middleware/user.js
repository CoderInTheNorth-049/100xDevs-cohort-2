// Importing the User model from the database
const { User } = require('../db');

// Middleware for handling user authentication
function userMiddleware(req, res, next) {
    // Extracting username and password from request headers
    const username = req.headers.username;
    const password = req.headers.password;

    // Finding a user with the provided username and password in the User collection
    User.findOne({
        username: username,
        password: password
    }).then((user) => {
        if (user) {
            // If user exists, proceed to the next middleware/route handler
            next();
        } else {
            // If user does not exist, return a 404 error indicating user not found
            res.status(404).json({ msg: "User not found" });
        }
    }).catch((err) => {
        // Handling any potential errors that might occur during the database query
        console.error("Error in user authentication middleware:", err);
        res.status(500).json({ msg: "Internal server error" });
    });
}

// Exporting the userMiddleware function to use it in other parts of the application
module.exports = userMiddleware;
