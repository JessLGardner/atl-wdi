const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/greeting', (req, res) => {
    res.render('greeting', {
        saying: req.query.saying,
        name: req.query.name
    });
});

app.get('/favorite-foods', function(req, res) {
    var favoriteFoods = ["Jeni's almond butter brittle ice cream", 'Tacos from Superica', 'a breakfast sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in downtown Los Angeles', 'Pizza from Little Star in San Francisco'];
    
    res.render('favorite-foods', {
        data: favoriteFoods
    });
});








const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  
});
