const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const jwt = require("jsonwebtoken");

// Middleware for parsing request bodies
app.use(bodyParser.json()); // Using body-parser middleware to parse incoming JSON requests
app.use("/admin", adminRouter); // Mounting adminRouter for routes starting with '/admin'
app.use("/user", userRouter); // Mounting userRouter for routes starting with '/user'

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Server listening on defined PORT
});
