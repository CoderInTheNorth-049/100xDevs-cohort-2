const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const { Admin, Course } = require('../db');

// Admin Routes

// Route for admin signup
router.post('/signup', async (req, res) => {
    // Extracting username and password from request body
    const { username, password } = req.body;

    // Creating a new admin in the Admin collection
    await Admin.create({
        username: username,
        password: password
    });

    res.json({ message: 'Admin created successfully' });
});

// Route for creating a new course (accessible only to admins)
router.post('/courses', adminMiddleware, async (req, res) => {
    // Extracting course details from request body
    const { title, description, imageLink, price } = req.body;

    // Creating a new course in the Course collection
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });

    res.json({
        message: 'Course created successfully',
        courseId: newCourse._id
    });
});

// Route for fetching all courses (accessible only to admins)
router.get('/courses', adminMiddleware, async (req, res) => {
    // Fetching all courses from the Course collection
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses
    });
});

module.exports = router;
