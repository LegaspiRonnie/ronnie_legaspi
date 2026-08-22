//imp packagesc
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

//initialize
const app = express();

//middleware
app.use(cors());
app.use(express.json());
//ask later on why we getting favIcon.ico
app.use((request, response, next) => {
    const timeStamp = new Date().toISOString();
    console.log(`[${timeStamp}] ${request.method} ${request.url}`);
    next();
})

app.use('/api/users', userRoutes);



module.exports = app;