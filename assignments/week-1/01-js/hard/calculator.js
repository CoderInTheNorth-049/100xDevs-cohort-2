/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0; // Initialize result variable in the constructor
  }

  // Methods for arithmetic operations
  add(num) {
    this.result += num; // Adds the given number to the result
  }

  subtract(num) {
    this.result -= num; // Subtracts the given number from the result
  }

  multiply(num) {
    this.result *= num; // Multiplies the result by the given number
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero"); // Throws an error if division by zero is attempted
    }
    this.result /= num; // Divides the result by the given number
  }

  clear() {
    this.result = 0; // Resets the result variable to 0
  }

  getResult() {
    return this.result; // Returns the current value of the result variable
  }

  calculate(expression) {
    try {
      this.result = eval(expression); // Evaluates the expression and assigns the result
    } catch (err) {
      throw new Error("Invalid expression."); // Throws an error for an invalid expression
    }
    if (this.result === Infinity) {
      throw new Error("Cannot divide a number by 0."); // Throws an error if division by zero occurs during evaluation
    }
    return this.result; // Returns the final calculated result
  }
}

module.exports = Calculator;

