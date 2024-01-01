// Importing the mongoose library
const mongoose = require('mongoose');

// Connect to MongoDB using the provided connection string
mongoose.connect('mongodb+srv://admin:arif049@cluster0.tfqnzyt.mongodb.net/course_selling_app');

// Define schemas for different entities in the database

// Schema for Admin collection/document
const AdminSchema = new mongoose.Schema({
    username: String, // Field for the admin's username, stored as a string
    password: String // Field for the admin's password, stored as a string
});

// Schema for User collection/document
const UserSchema = new mongoose.Schema({
    username: String, // Field for the user's username, stored as a string
    password: String, // Field for the user's password, stored as a string
    purchasedCourses: [{ 
        type: mongoose.Schema.Types.ObjectId, // Array of ObjectIds referencing 'Course' model
        ref: 'Course' // Refers to the 'Course' model for relationship establishment
    }]
});

// Schema for Course collection/document
const CourseSchema = new mongoose.Schema({
    title: String, // Field for the course title, stored as a string
    description: String, // Field for the course description, stored as a string
    imageLink: String, // Field for the image link of the course, stored as a string
    price: Number // Field for the price of the course, stored as a number
});

// Creating models based on the defined schemas

const Admin = mongoose.model('Admin', AdminSchema); // Model for Admin collection
const User = mongoose.model('User', UserSchema); // Model for User collection
const Course = mongoose.model('Course', CourseSchema); // Model for Course collection

// Exporting the models to use them in other parts of the application
module.exports = {
    Admin,
    User,
    Course
}
