/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const start = new Date(); // Record the current time before computation

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // Perform the sum calculation from 1 to n
    }

    const end = new Date(); // Record the current time after computation

    const timeTaken = end - start; // Calculate the time difference in milliseconds
    return timeTaken / 1000; // Convert milliseconds to seconds and return
}

// Test cases
console.log(calculateTime(1000000)); // Time taken to calculate sum from 1-1e6
console.log(calculateTime(100000000)); // Time taken to calculate sum from 1-1e8
console.log(calculateTime(1000000000)); // Time taken to calculate sum from 1-1e9
console.log(calculateTime(10000000000)); // Time taken to calculate sum from 1-1e10
