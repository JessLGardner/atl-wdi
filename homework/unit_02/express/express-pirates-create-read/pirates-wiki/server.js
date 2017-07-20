// APP REQUIRES
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// APP SETUP
const app = express();
const port = process.env.PORT || 3000;


// VIEWS
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: true
}));







//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use('/pirates', pirateController);



// SERVER 
app.listen(port, (req, res) => {
    console.log(`server running on ${port}`);
});
