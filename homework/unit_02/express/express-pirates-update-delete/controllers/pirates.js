//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page     INDEX
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});

//NEW
router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page   // SHOW
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});

//EDIT
router.get('/:id/edit', (req, res) =>{
	const id = req.params.id;
	const pirate = pirates[id];
	
	res.render('pirates/edit.hbs', {
		pirates: pirate,
		id: id
	})
});


//==============================
// CREATE
//==============================
router.post('/', (req, res) =>{
//get info from new hbs
	const newPirate = {
		name: req.body.name,
		birthplace: req.body.birthplace,
		death_year: req.body.death_year,
		base: req.body.base,
		nickname: req.body.nickname
	}
//push new to array
	pirates.push(newPirate);
// render
	res.redirect('/pirates');
});




//==============================
// UPDATE
//==============================
router.put('/:id', (req, res) =>{
	const id = req.params.id;
	const pirate = pirates[id];

	pirates.name = req.body.name; 
	pirates.birthplace = req.body.birthplace;
	pirates.death_year = req.body.death_year;
	pirates.base = req.body.base;
	pirates.nickname = req.body.nickname;

	res.method = "GET";
	res.redirect(`/pirates/${id}`);
});



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
