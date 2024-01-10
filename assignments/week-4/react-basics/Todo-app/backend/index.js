const express = require('express');
const bodyParser = require('bodyParser');
const { createTodo } = require('./types');


const app = express();

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "wrong input format"
        })
        return;
    }

})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "wrong input format"
        })
        return;
    }
})

app.listen(3000);