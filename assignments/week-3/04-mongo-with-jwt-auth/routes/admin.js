const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// Admin Routes

// Creating a new admin
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const exists = await Admin.findOne({ username: username });
    if (exists) {
        res.status(403).json({
            message: "Admin with this username exists"
        });
        return;
    } else {
        await Admin.create({
            username: username,
            password: password
        });
        res.json({
            message: "Admin created successfully"
        });
    }
});

// Admin login/signin
router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({
        username: username,
        password: password
    });

    if (admin) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({
            token: "Bearer " + token
        });
    } else {
        res.status(404).json({
            message: "Admin not found"
        });
    }
});

// Creating a new course - Requires admin authentication
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });

    res.json({
        message: "Course created successfully"
    });
});

// Getting all courses - Requires admin authentication
router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    });
});

module.exports = router;
