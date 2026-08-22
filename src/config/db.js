const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

const testConnection = async () => {
    try {
        const client = await pool.connect();
        await client.query('SELECT 1');
        console.log('Database connected');
        client.release();
        return true;
    } catch (err) {
        console.error('Cannot connect to the database:', err.message);
        return false;
    }
};

module.exports = { pool, testConnection };