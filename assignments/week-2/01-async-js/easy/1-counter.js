let ct = 0; // Initialize a variable ct to 0

function counter() {
  ct += 1; // Increment ct by 1
  console.log(ct); // Output the current value of ct to the console

  if (ct >= 30) {
    clearInterval(interval); // If ct reaches 30 or more, stop the interval
  }
}

const interval = setInterval(counter, 1000); // Call counter function every 1 second (1000 milliseconds)
