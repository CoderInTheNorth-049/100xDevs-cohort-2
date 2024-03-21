// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

import { useState, memo, useCallback } from "react";

// Assignment1: A component for managing a simple counter 
export function Assignment1() {
  // Initialize the count state with a starting value of 0
  const [count, setCount] = useState(0);

  // Optimized increment function with useCallback
  const handleIncrement = useCallback(() => {
    // Update count using the callback form for reliable updates
    setCount(currCount => currCount + 1); 
  }, []); // Empty dependency array: create this function only once

  // Optimized decrement function with useCallback
  const handleDecrement = useCallback(() => {
    // Update count using the callback form for reliable updates
    setCount(currCount => currCount - 1); 
  }, []); // Empty dependency array: create this function only once

  return (
    <div>
      <p>Count: {count}</p> 
      {/* Pass optimized counter functions to the child component */}
      <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} /> 
    </div>
  );
};

// CounterButtons: A memoized component for efficient rendering 
const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    {/* Buttons trigger the provided increment/decrement functions */}
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
));
