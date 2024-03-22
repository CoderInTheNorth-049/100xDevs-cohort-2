// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.
import { useEffect, useRef } from "react";

export function Assignment1() {
  // Create a ref to hold a reference to the input element
  const inputRef = useRef();

  // useEffect for focusing on mount and dependencies
  useEffect(() => {
    // Focus the input element when the component first renders
    inputRef.current.focus(); 
  }, [inputRef]); // Run this effect only once on component mount

  // Event handler function for the button click
  const handleButtonClick = () => {
    // Refocus the input element 
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Attach the ref to the input element for direct access */}
      <input ref={inputRef} type="text" placeholder="Enter text here" /> 

      {/* Button to trigger refocusing */}
      <button onClick={handleButtonClick}>Focus Input</button> 
    </div>
  );
};
