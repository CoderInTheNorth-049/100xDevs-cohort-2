// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
// Import required modules and set up the Express app

const request = require('supertest'); // Importing Supertest for testing
const assert = require('assert'); // Importing assertion library
const express = require('express'); // Importing Express.js
const app = express(); // Creating an instance of Express app

// Object to track the number of requests made by each user within a second
let numberOfRequestsForUser = {};

// Resetting the request count for each user every second
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

// Middleware to enforce rate limiting
app.use((req, res, next) => {
    const user = req.headers["user-id"]; // Extracting user ID from request headers
    if (numberOfRequestsForUser[user]) {
        // If user has made requests within the last second
        numberOfRequestsForUser[user] += 1;
        if (numberOfRequestsForUser[user] > 5) {
            // If user has exceeded the rate limit of 5 requests per second
            res.status(404).send("Rate limit exceeded"); // Blocking the request with a 404 response
            return;
        }
        next(); // Allowing the request to proceed
    } else {
        // If it's the first request from the user within the last second
        numberOfRequestsForUser[user] = 1; // Initializing the request count for the user
        next(); // Allowing the request to proceed
    }
});

// Sample endpoint - GET request to retrieve user information
app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' }); // Sending a JSON response with user data
});

// Sample endpoint - POST request to create a dummy user
app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' }); // Sending a JSON response for user creation
});

module.exports = app; // Exporting the Express app
