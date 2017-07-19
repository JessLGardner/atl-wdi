const express = require('express');
const router = express.Router();


router.get('/:amount/:size', (req, res) => {
    res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`);
});



module.exports = router;