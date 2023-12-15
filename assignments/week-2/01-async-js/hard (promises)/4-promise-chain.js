/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    // Returns a promise that resolves after t seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`solved after ${t} seconds`);
        }, t * 1000);
    });
}

function wait2(t) {
    // Returns a promise that resolves after t seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`solved after ${t} seconds`);
        }, t * 1000);
    });
}

function wait3(t) {
    // Returns a promise that resolves after t seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`solved after ${t} seconds`);
        }, t * 1000);
    });
}

function calculateTime(t1, t2, t3) {
    // Record the starting time
    let startTime = Date.now();

    // Return a promise chain that sequentially waits for all three promises to resolve
    return wait1(t1)
        .then(() => wait2(t2))
        .then(() => wait3(t3))
        .then(() => {
            // Calculate the time taken by subtracting start time from end time
            let endTime = Date.now();
            return endTime - startTime; // Returning the time taken in milliseconds
        });
}

module.exports = calculateTime;

