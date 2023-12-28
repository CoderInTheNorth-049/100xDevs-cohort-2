// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0; // Variable to track the count of errors

// Endpoint to get user data - intentionally throws an error
app.get('/user', function(req, res) {
  throw new Error("User not found"); // Simulating an error by throwing an exception
  res.status(200).json({ name: 'john' }); // This line won't execute due to the thrown error
});

// Endpoint to create a dummy user
app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

// Endpoint to retrieve the current error count
app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount }); // Sending the current error count as a JSON response
});

// Error handling middleware to catch exceptions in the application
app.use((err, req, res, next) => {
  errorCount += 1; // Incrementing the error count for each caught exception
  res.status(404).send(); // Sending a 404 status code in response to the error
});

module.exports = app; // Exporting the Express app
