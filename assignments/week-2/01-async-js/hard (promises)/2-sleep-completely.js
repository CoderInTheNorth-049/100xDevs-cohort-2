/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve => {
        const startTime = Date.now();
        while (Date.now() - startTime < milliseconds) {
      // Busy-wait loop: This loop will continuously run until the specified milliseconds have passed
      // During this time, the thread is occupied and unable to perform other tasks
      // It simulates a thread being 'busy' or 'blocked'
        }
        resolve(); // Resolve the promise after the specified time
    })
}

module.exports = sleep;
