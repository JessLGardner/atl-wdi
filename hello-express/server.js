const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!!');
    // res.render('index.html');    what sends the html to client
    // res.redirect('/greeting');   sends to greeting from index page
    console.log('req.route');
    console.log('req.query');
    console.log('req.params');
    // console.log('res');
});

app.get('/greetings', (req, res) => {
    res.send('Hey WDI 11!');
});

app.get('/rihanna', (req, res) => {
    res.send('work work work work work');
});

app.get('/users/:user_id/friends/:friend_id', (req, res) =>{
    console.log(req.query);
    res.send(`Hello user #:${req.params.user_id}. Your friend is user #:${req.params.friend_id}.`)
});

app.get('/food/:food', (req, res) =>{
    res.send(`I really really love ${req.params.food}.`)
}) ;

app.get('/sightings', (req, res) => {
    console.log(req.query);
    res.send(`How many ufo sightings do you think there are in ${req.query.state}? ${req.query.sights}.`);
});

// app.get('/math/add', (req, res) => {
// const value = parseInt(req.query.num1) + parseInt(req.query.num2);
//     res.send(`${req.query.num1} + ${req.query.num2} = ${value}`);
// });

// app.get('/math/subtract', (req, res) => {
// const value = parseInt(req.query.num1) - parseInt(req.query.num2);
//     res.send(`${req.query.num1} - ${req.query.num2} = ${value}`);
// });

// app.get('/math/multiply', (req, res) => {
// const value = parseInt(req.query.num1) * parseInt(req.query.num2);
//     res.send(`${req.query.num1} * ${req.query.num2} = ${value}`);
// });

// app.get('/math/divide', (req, res) => {
// const value = parseInt(req.query.num1) / parseInt(req.query.num2);
//     res.send(`${req.query.num1} / ${req.query.num2} = ${value}`);
// });

app.get('/math/:operator', (req, res) => {
    if (req.params.operator === '+') {
        var value = parseInt(req.query.num1) + parseInt(req.query.num2);
        res.send(`${req.query.num1} + ${req.query.num2} = ${value}`);
    } else if (req.params.operator === 'subtract') {
        var value = parseInt(req.query.num1) - parseInt(req.query.num2);
        res.send(`${req.query.num1} - ${req.query.num2} = ${value}`);
    } else if (req.params.operator === '*') {
        var value = parseInt(req.query.num1) * parseInt(req.query.num2);        
        res.send(`${req.query.num1} * ${req.query.num2} = ${value}`);
    } else if (req.params.operator === 'divide') {
        var value = parseInt(req.query.num1) / parseInt(req.query.num2);
        res.send(`${req.query.num1} / ${req.query.num2} = ${value}`);
    }
});










const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("hello-express is running on port " + port);  
});
