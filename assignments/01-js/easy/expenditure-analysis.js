/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // Initialize an empty object to store the total spent for each category
  let result = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // Check if the category exists in the result object
    if (category in result) {
      // If the category exists, add the transaction price to the existing total
      result[category] += price;
    } else {
      // If the category does not exist, set the transaction price as the total for that category
      result[category] = price;
    }
  });

  // Convert the result object into an array of objects with 'category' and 'totalSpent' keys
  let ans = Object.keys(result).map(category => ({
    category: category,
    totalSpent: result[category]
  }));

  // Return the array containing total spent for each category
  return ans;
}


module.exports = calculateTotalSpentByCategory;
