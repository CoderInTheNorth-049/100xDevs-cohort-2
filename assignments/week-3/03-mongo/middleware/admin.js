// Importing the Admin model from the database
const { Admin } = require('../db');

// Middleware for handling admin authentication
function adminMiddleware(req, res, next) {
    // Extracting username and password from request headers
    const username = req.headers.username;
    const password = req.headers.password;

    // Finding an admin with the provided username and password in the Admin collection
    Admin.findOne({
        username: username,
        password: password
    }).then((admin) => {
        if (admin) {
            // If admin exists, proceed to the next middleware/route handler
            next();
        } else {
            // If admin does not exist, return a 404 error indicating admin not found
            res.status(404).json({ msg: "Admin not found" });
        }
    }).catch((err) => {
        // Handling any potential errors that might occur during the database query
        console.error("Error in admin authentication middleware:", err);
        res.status(500).json({ msg: "Internal server error" });
    });
}

// Exporting the adminMiddleware function to use it in other parts of the application
module.exports = adminMiddleware;
