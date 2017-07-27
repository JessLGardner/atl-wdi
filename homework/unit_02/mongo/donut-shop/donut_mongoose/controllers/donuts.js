//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require("express");
const router = express.Router();
const DonutModel = require("../models/donuts");

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (req, res)=>{
    DonutModel.find({})
        .then((donut)=>{
            console.log('calling index page');
            // res.send(donut);
            res.render('donuts/index', 
                {
                donut,
                // donutd: donut._id,
                // donutImg: donut.img,
                // donutName: donut.name,
                // donutPrice: donut.price
                }
            )
        })
        .catch((err)=>{
            console.log('Error finding donuts!');
            console.log(err);
        })
});


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form



//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
// router.get('/:id', (req, res)=>{

// })



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"



//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;




// Set up your requirements. DON'T FORGET to module.exports the router at the bottom.
// Create a GET index route "/" that sends all donuts to index.hbs
// Create a GET show route "/:id" that renders the donut's show page
// Create a GET new route "/new" that renders the new.hbs form
// Create a POST index route "/" that creates a new donut and upon success redirects back to the index page
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and sends that donut's data to it
// Create a PUT update route "/:id" that updates the donut and redirects back to the SHOW PAGE (not index)
// Create a DELETE delete route "/:id" that deletes the donut and redirects back to index page "/"
// 🎯 Git add, git commit after each route