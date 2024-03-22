// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

import React, { useState, useCallback, useEffect, useRef } from 'react';

export function Assignment2() {
  // State to trigger re-renders 
  const [ct, forceRender] = useState(0);

  // Ref to track render count without triggering re-renders
  const count = useRef(0); 

  // useEffect to update render count after each render
  useEffect(() => {
    count.current = count.current + 1; // Increment render count
  });

  // Optimized event handler function to force re-renders
  const handleReRender = useCallback(() => {
    forceRender(ct + 1); 
  }, [ct]); // Only recreate if 'ct' changes

  return (
    <div>
      {/* Display the current render count */} 
      <p>This component has rendered {count.current} times.</p> 
      
      {/* Button to force a re-render */}
      <button onClick={handleReRender}>Force Re-render</button> 
    </div>
  );
};
