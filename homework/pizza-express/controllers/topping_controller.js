const express = require('express');
const router = express.Router();



router.get('/:type', (req, res) => {
    res.send(`${req.params.type} pizza! Good choice.`);
});




module.exports = router;