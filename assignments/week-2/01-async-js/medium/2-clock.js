let ct = 0;

function counter() {
    let d = new Date();
    let hr = d.getHours();
    let mn = d.getMinutes();
    let sc = d.getSeconds();
    
    console.log(`${hr}:${mn}:${sc}`);

    let ampm = hr >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM
    hr = hr % 12 || 12; // Convert 0 to 12 for midnight
    
    console.log(`${hr}:${mn}:${sc} ${ampm}`);

    ct++; // Increment counter
    
    if (ct < 10) {
        setTimeout(counter, 1000); // Call counter() again after 1 second
    }
}

counter(); // Start the counter initially
