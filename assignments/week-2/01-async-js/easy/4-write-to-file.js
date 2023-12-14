const fs = require('fs');

// Appends the text to the file asynchronously
fs.appendFile('./a.txt', "\nWhere is everyone hiding?", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Text appended to file.');
});

// This loop is synchronous and will take a significant amount of time to complete
for (let i = 0; i < 10000000000; i++) {
    // Intentionally left empty; this loop consumes time
}

console.log("loop ended");
