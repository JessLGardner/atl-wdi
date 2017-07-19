var express = require('express');
var hbs = require('hbs');

var app = express();
app.set("view engine", "hbs");



const indexController = require('./controllers/index_controller');
app.use('/', indexController);

const toppingController = require('./controllers/topping_controller');
app.use('/topping', toppingController);

const orderController = require('./controllers/order_controller');
app.use('/order', orderController);

app.use('*', (req,res) => { 
    res.send('404 Page Not Found')
});
               







var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
