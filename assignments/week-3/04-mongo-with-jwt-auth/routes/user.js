const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function getUsername(token) {
    // Extracting the username from the JWT token in the Authorization header
    const words = token.split(" ");
    const jwtToken = words[1];
    const decoded = jwt.decode(jwtToken);
    const username = decoded.username;
    return username;
}

// User Routes

// Creating a new user
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const exists = await User.findOne({
        username: username
    });

    if (exists) {
        res.status(403).json({
            message: "User with this username already exists"
        });
        return;
    } else {
        await User.create({
            username,
            password
        });
        res.json({
            message: "User created successfully"
        });
    }
});

// User login/signin
router.post('/signin', async (req, res) => {
    // Implement user signin logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username: username,
        password: password
    });

    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({
            token: "Bearer " + token
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
});

// Getting all courses - Requires user authentication
router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    });
});

// Purchasing a course - Requires user authentication
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const token = req.headers.authorization;
    const username = getUsername(token);

    await User.updateOne({
        username: username
    },
    {
        "$push": {
            purchasedCourses: courseId
        }
    });

    res.json({
        message: "Course purchased successfully"
    });
});

// Fetching purchased courses - Requires user authentication
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization;
    const username = getUsername(token);

    const user = await User.findOne({ username: username });

    const allCourses = await Course.find({
        _id: {
            '$in': user.purchasedCourses
        }
    });

    res.json({
        courses: allCourses
    });

});

module.exports = router;
