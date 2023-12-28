// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// Global middleware to increment the request count for every incoming request
app.use((req, res, next) => {
  requestCount += 1; // Incrementing the request count for each incoming request
  next(); // Passing control to the next middleware or route handler
});

// Endpoint to handle GET requests for user information
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' }); // Sending a JSON response with user data
});

// Endpoint to handle POST requests for creating a dummy user
app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' }); // Sending a JSON response for user creation
});

// Endpoint to retrieve the current request count
app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount }); // Sending the current request count as a JSON response
});

module.exports = app; // Exporting the Express app
