// Importing required modules
const express = require('express'); // Importing Express.js framework
const bodyParser = require('body-parser'); // Middleware for parsing request bodies

// Creating an instance of Express application
const app = express();

// Importing routers
const adminRouter = require("./routes/admin"); // Router for admin-related routes
const userRouter = require("./routes/user"); // Router for user-related routes

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Using the imported routers for specific routes
app.use("/admin", adminRouter); // Mounting adminRouter for routes starting with "/admin"
app.use("/user", userRouter); // Mounting userRouter for routes starting with "/user"

// Setting the port number for the server to listen on
const PORT = 3000;

// Starting the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
