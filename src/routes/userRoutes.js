const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const users = [
    {
        id: 1,
        username: "User1",
        email: "user1@gmail.com",
        age: 1
    },
    {
        id: 2,
        username: "User2",
        email: "user2@gmail.com",
        age: 2
    },
    {
        id: 3,
        username: "User3",
        email: "user3@gmail.com",
        age: 3
    },
]

router.get('/', (request, response) => {
    
    response.json(users);
})

router.get('/:id', (request, response) => {
    const id = Number(request.params.id);
    const result = users.filter((u) => u.id === id);
    response.json(result[0]);
})

router.post('/', (request, response) => {
    const { id, username, email, age } = request.body;
    const newUser = {
        id: id,
        username: username, 
        email: email,
        age: age
    }
    users.push(newUser);
    console.log(users);
    response.json({"successfully created ": newUser});
})

router.put('/:id', (request, response) => {
    const id = Number(request.params.id);
    const { username, email, age } = request.body;
    const newUser = {
        id: id,
        username: username, 
        email: email,
        age: age
    }
    users.push(newUser);
    console.log(users);
    response.json({"successfully created ": newUser});
})

router.delete('/:id', (request, response) => {
    const id = request.params.id;
    //some query
    response.send("Car with the id of id is deleted", id);
})

module.exports = router;