const fs = require('fs');

fs.readFile('./a.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    // Process the data (remove extra whitespaces)
    let fileContent = data.toString().replace(/\s+/g, ' ');

    // Write the processed data back to the file
    fs.writeFile('./a.txt', fileContent, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File updated successfully.');
    });
});
