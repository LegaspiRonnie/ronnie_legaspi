require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { testConnection } = require('./config/db');

const PORT = process.env.PORT || 3000;
const app = require('./app');

(async () => {
    const connected = await testConnection();

    if (connected) {
        app.listen(PORT, () => {
            console.log(`Server is running on port:${PORT}`);
        });
    }
})();