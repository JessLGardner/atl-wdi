var express = require('express');
var hbs = require('hbs');

var app = express();













var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
