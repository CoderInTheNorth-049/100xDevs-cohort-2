let ct = 0; // Initialize a variable ct to 0

function counter() {
  ct += 1; // Increment ct by 1
  console.log(ct); // Output the current value of ct to the console

  if (ct < 30) {
    // If ct is less than 30, schedule the counter function to run again after 1 second
    setTimeout(counter, 1000);
  }
}

counter(); // Start the counter function initially
