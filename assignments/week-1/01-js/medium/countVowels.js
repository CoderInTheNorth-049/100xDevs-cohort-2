/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert the input string to lowercase to consider both uppercase and lowercase vowels
  let s = str.toLowerCase();
  let result = 0; // Initialize a variable to store the count of vowels

  let vowels = ['a', 'e', 'i', 'o', 'u']; // Array containing lowercase vowels

  for (let i = 0; i < s.length; i++) {
      // Iterate through each character in the string
      if (vowels.includes(s[i])) {
          // Check if the current character is a vowel (present in the vowels array)
          result += 1; // Increment the count of vowels when a vowel is found
      }
  }

  return result; // Return the total count of vowels in the string
}

module.exports = countVowels;