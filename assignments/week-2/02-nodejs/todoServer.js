/*
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
 
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos

  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123

  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
 
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }

  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
*/

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

function findIdx(arr, id) {
  // Function to find the index of an object in an array based on its 'id' property
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i; // If 'id' matches, return the index
  }
  return -1; // If not found, return -1
}

function delID(arr, idx) {
  // Function to delete an object from an array based on its 'id' property
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== idx) newArr.push(arr[i]); // Push items that don't match 'id' to the new array
  }
  return newArr; // Return the new array without the specified 'id'
}

// Express routes handling CRUD operations for todos

// GET all todos
app.get('/todos', (req, res) => {
  // Read 'todos.json' file and send its content as JSON response
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.status(200).json(JSON.parse(data));
  });
});

// GET a specific todo by ID
app.get('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    let arr = JSON.parse(data);
    let idx = findIdx(arr, parseInt(req.params.id));
    if (idx === -1) res.status(404).send('Not Found');
    else res.status(200).json(arr[idx]); // Send the todo object with the specified 'id'
  });
});

// POST a new todo
app.post('/todos', (req, res) => {
  // Create a new todo object
  let newtodo = {
    id: Math.floor(Math.random() * 1000000), // Generate a random ID
    title: req.body.title,
    description: req.body.description
  };

  // Read 'todos.json', append the new todo, and write back to the file
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    let arr = JSON.parse(data);
    arr.push(newtodo);

    fs.writeFile('todos.json', JSON.stringify(arr), (err) => {
      if (err) throw err;
      res.status(201).json(newtodo); // Send the newly created todo as response
    });
  });
});

// PUT (update) a todo by ID
app.put('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    let arr = JSON.parse(data);
    let idx = findIdx(arr, parseInt(req.params.id));
    if (idx === -1) return res.status(404).send('Not Found');

    // Update the existing todo with new data
    let updatedTodo = {
      id: arr[idx].id,
      title: req.body.title,
      description: req.body.description
    };

    arr[idx] = updatedTodo;

    fs.writeFile('todos.json', JSON.stringify(arr), (err) =>{
      if (err) throw err;
      res.status(200).send(updatedTodo); // Send the updated todo as response
    });
  });
});

// DELETE a todo by ID
app.delete('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) return err;
    let arr = JSON.parse(data);
    let idx = findIdx(arr, parseInt(req.params.id));
    if (idx === -1) return res.status(404).send('Not Found');
    let newArr = delID(arr, idx); // Remove the todo with the specified 'id'

    fs.writeFile('todos.json', JSON.stringify(newArr), (err) => {
      if (err) throw err;
      res.status(200).send(newArr); // Send the modified array as response
    });
  });
});

app.use((req, res, next) => {
  res.status(404).send();
});
  
module.exports = app;