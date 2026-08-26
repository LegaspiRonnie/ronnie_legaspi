const express = require('express');
const { pool } = require('../config/db');
const router = express.Router();
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

router.get('/', async (request, response) => {
    try {
        const result = await pool.query('CREATE');
        response.status(200).json(result.rows);
    } catch (err) {
        console.error('Failed to fetch users:', err);
        response.status(500).json({ message: 'Internal server error', error: err });
    }
})

router.get('/:id', async (request, response) => {
    try {
        const id = Number(request.params.id);
        const user = users.find((user) => user.id === id);

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        response.json(user);
    } catch (err) {
        console.error('Failed to fetch user:', err);
        response.status(500).json({ message: 'Internal server error' });
    }
})

router.post('/', async (request, response) => {
    try {
        const { id, username, email, age } = request.body;
        const newUser = {
            id: id,
            username: username, 
            email: email,
            age: age
        }
        users.push(newUser);
        response.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
        console.error('Failed to create user:', err);
        response.status(500).json({ message: 'Internal server error' });
    }
})

router.put('/:id', async (request, response) => {
    try {
        const id = Number(request.params.id);
        const { username, email, age } = request.body;
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return response.status(404).json({ message: 'User not found' });
        }

        const updatedUser = {
            id: id,
            username: username,
            email: email,
            age: age
        };

        users[userIndex] = updatedUser;
        response.json({ message: 'User updated successfully', user: updatedUser });
    } catch (err) {
        console.error('Failed to update user:', err);
        response.status(500).json({ message: 'Internal server error' });
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const id = Number(request.params.id);
        const userIndex = users.findIndex((u) => u.id === id);

        if (userIndex === -1) {
            return response.status(404).json({ message: 'User not found' });
        }

        users.splice(userIndex, 1);
        response.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error('Failed to delete user:', err);
        response.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router;