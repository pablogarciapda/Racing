const express = require('express');
const router = express.Router();

router.get('/task', (req, res) => {
     res.send('API tareas iran aqui')
});

module.exports = router;