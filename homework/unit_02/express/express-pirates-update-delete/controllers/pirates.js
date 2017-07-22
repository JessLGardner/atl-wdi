//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================






//==============================
// UPDATE
//==============================
// router.put('/:id', (req, res) =>{

// });





//==============================
// DESTROY
//==============================
router.delete('/:id', (req, res) =>{
	pirates.splice(req.params.id, 1);
	res.method='GET';
	res.redirect('/pirates');
});



//==============================
// EXPORTS
//==============================

module.exports = router;
