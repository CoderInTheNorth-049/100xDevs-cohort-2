// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

import React, { useMemo, useState } from "react";

// Data generation (Could be moved to a separate file for cleaner organization)
const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += (words[Math.floor(words.length * Math.random())])
    sentence += " "
  }
  ALL_WORDS.push(sentence);
}

export function Assignment2() {
  // State variables
  const [sentences, setSentences] = useState(ALL_WORDS); // Holds the complete list of sentences
  const [substring, setFilter] = useState("");          // Stores the current filter text

  // Optimized filtering logic using useMemo
  const finalStrings = useMemo(() => {
    return sentences.filter(x => x.includes(substring));
  }, [substring, sentences]); // Recalculates when filter text or the sentences array changes

  // Rendering component UI
  return <div>
    <input type="text" onChange={(e) => {setFilter(e.target.value)}}></input> 
    {finalStrings.map((word, index) => 
      <div key={index}> 
        {word}
      </div>
    )}
  </div>
}
