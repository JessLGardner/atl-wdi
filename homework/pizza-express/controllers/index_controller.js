const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {
        data: 'Pizza Express'
    });
});


module.exports = router;