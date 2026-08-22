//imp packagesc
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

//initialize
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use('/', userRoutes);
app.get('/', (request, response) => {
    response.send("list of all users");
})

app.get('/:id', (request, response) => {
    const id = request.params.id;
    response.send("This car with id ", id);
})

app.post('/', (request, response) => {
    const {carName} = request.body;
    response.send("successfully created ", carName);
})

app.put('/:id', (request, response) => {
    const {carName} = request.body;
    response.send("successfully updated ", carName);
})

app.delete('/:id', (request, response) => {
    const id = request.params.id;
    //some query
    response.send("Car with the id of id is deleted", id);
})

module.exports = app;