const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('whatsup mga paa');
});

module.exports = router;