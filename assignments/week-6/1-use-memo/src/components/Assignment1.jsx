import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  // State to store the user's input number 
  const [input, setInput] = useState(1);

  // useMemo hook to cache the expensive factorial calculation
  const expensiveValue = useMemo(() => {
    let val = 1;

    // Loop to calculate the factorial
    for (let i = 2; i <= input; i++) { 
      val = val * i;
    }

    return val; 
  }, [input]); // Recalculate only if the input changes

  // UI Elements
  return (
    <div>
      {/* Input field for the user to enter a number */}
      <input 
        type="number" 
        value={input} 
        onChange={(e) => setInput(Number(e.target.value))} 
      />

      {/* Display the calculated factorial */}
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
