const fs = require('fs');

fs.readFile('./a.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('file contents: ');
    console.log(data);
});

// This loop is synchronous and will take a significant amount of time to complete
for (let i = 0; i < 1000000000; i++) {
    // Intentionally left empty; this loop consumes time
}

console.log("loop ended");

// readFile work async so loop will strt and data read by readFile will be in callback queue.
// after loop will end it will print "loop ended" and then data from callback queue will go to stack and then it will print file content
