// REQUIRES
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');

router.get('/', (req, res) =>{
    res.render('index.hbs', {
        pirates: pirates
    });
});









// EXPORTS
module.exports = router;