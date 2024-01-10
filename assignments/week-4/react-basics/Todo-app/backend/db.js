const mongoose = require('mongoose');
// mongodb+srv://admin:arif049@cluster0.tfqnzyt.mongodb.net/todos
mongoose.connect("mongodb+srv://admin:arif049@cluster0.tfqnzyt.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}