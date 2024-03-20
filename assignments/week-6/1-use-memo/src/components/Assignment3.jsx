
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent
import React, { useState, useMemo } from 'react';

export const Assignment3 = () => {
  // State to store the grocery shopping list
  const [items, setItems] = useState([
    { name: 'Chocolates', value: 10 },
    { name: 'Chips', value: 20 },
    { name: 'Onion', value: 30 },
    { name: 'Tomato', value: 30 },
    // Add more items as needed
  ]);

  // Calculate total value using useMemo for optimization
  const totalValue = useMemo(() => {
    let sum = 0; 

    // Loop through items and sum up their values
    items.map((item) => {
      sum += item.value;
    })
    return sum;
  }, [items]); // Recompute total only when the 'items' array changes

  return (
    <div>
      {/* Display the shopping list */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - Price: ${item.value}</li>
        ))}
      </ul>

      {/* Display the calculated total */}
      <p>Total Value: {totalValue}</p>
    </div>
  );
};

