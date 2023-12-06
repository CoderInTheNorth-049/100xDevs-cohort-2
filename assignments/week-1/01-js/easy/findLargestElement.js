/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  // Set the initial maximum element as the first element in the array
  let max_element = numbers[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < numbers.length; i++) {
    // Check if the current element is greater than the current maximum element
    if (numbers[i] > max_element) {
      // If true, update the maximum element to the current element
      max_element = numbers[i];
    }
  }

  // Return the maximum element found in the array
  return max_element;
}


module.exports = findLargestElement;
