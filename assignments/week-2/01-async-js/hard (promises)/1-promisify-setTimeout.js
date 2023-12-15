/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// Function that returns a promise that resolves after n seconds have passed
function wait(n) {
    // Returning a new Promise that resolves after n seconds
    return new Promise(resolve => {
      // Using setTimeout to delay the resolution of the promise
      setTimeout(resolve, n * 1000); // Resolving after n seconds (n * 1000 milliseconds)
    });
  }
  
  module.exports = wait;
  