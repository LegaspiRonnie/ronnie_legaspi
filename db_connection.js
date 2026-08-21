require('dotenv').config();
const { Pool } = require('pg');


const pool = new Pool({
    user:     process.env.DB_USER,
    host:     process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port:     process.env.DB_PORT
});

const testConnection = async () => {
    try {
        const client = await pool.connect();
        await client.query('SELECT 1');
        console.log('Database connected');
        client.release();
    } catch (err) {
        console.error('Cannot connect to the database:', err.message);
    }
};

testConnection();

module.exports = pool;