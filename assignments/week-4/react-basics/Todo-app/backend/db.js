<<<<<<< HEAD
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
=======
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
>>>>>>> d4720f280b6c8f20ec47f3fde716e914016b81db
}