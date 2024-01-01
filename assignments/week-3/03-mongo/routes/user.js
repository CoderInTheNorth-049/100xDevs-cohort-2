const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require('../db');

// User Routes

// Route for user signup
router.post('/signup', async (req, res) => {
    // Extracting username and password from request body
    const { username, password } = req.body;

    // Creating a new user in the User collection
    await User.create({
        username,
        password
    });

    res.json({
        message: "User created successfully"
    });
});

// Route for listing all available courses
router.get('/courses', async (req, res) => {
    // Fetching all courses from the Course collection
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses
    });
});

// Route for a user to purchase a course
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Extracting courseId from request parameters and username from headers
    const { courseId } = req.params;
    const { username } = req.headers;

    // Updating the user's purchasedCourses array with the purchased courseId
    await User.updateOne(
        {
            username: username
        },
        {
            "$push": {
                purchasedCourses: courseId
            }
        }
    );

    res.json({
        message: "Course Purchased successfully!"
    });
});

// Route for a user to fetch their purchased courses
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Extracting username from headers
    const { username } = req.headers;

    // Finding the user in the User collection
    const user = await User.findOne({
        username: username
    });

    // Fetching all purchased courses using the user's purchasedCourses array
    const allCourses = await Course.find({
        _id: {
            '$in': user.purchasedCourses
        }
    });

    res.json({
        courseList: allCourses
    });
});

module.exports = router;
