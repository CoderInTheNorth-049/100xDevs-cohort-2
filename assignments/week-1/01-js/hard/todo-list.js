/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = []; // Initialize an empty array to store todos
  }

  // Method to add a todo to the list
  add(todo) {
    this.todoList.push(todo); // Add the provided todo to the list
  }

  // Method to remove a todo from the list by its index
  remove(indexOfTodo) {
    if (indexOfTodo >= this.todoList.length) return; // Check if the index is out of bounds
    this.todoList.splice(indexOfTodo, 1); // Remove the todo at the given index
  }

  // Method to update a todo at a specific index
  update(index, updatedTodo) {
    if (index >= this.todoList.length) return; // Check if the index is out of bounds
    this.todoList[index] = updatedTodo; // Update the todo at the given index
  }

  // Method to get all todos
  getAll() {
    return this.todoList; // Return the array containing all todos
  }

  // Method to get a todo at a specific index
  get(index) {
    if (index >= this.todoList.length) return null; // Check if the index is out of bounds
    return this.todoList[index]; // Return the todo at the given index
  }

  // Method to clear all todos from the list
  clear() {
    this.todoList = []; // Reset the todoList array to an empty array
  }
}

module.exports = Todo;

