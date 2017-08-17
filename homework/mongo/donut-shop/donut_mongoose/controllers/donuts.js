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
                { donut }
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

router.get('/new', (req, res)=>{
    res.render('donuts/new');
});


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (req, res)=>{
    const donutIdSearchFor = req.params.id;
    console.log('Where are you???');

    DonutModel.findById(donutIdSearchFor)
        .then((donut)=>{
            console.log('calling show page');
            res.render('donuts/show', 
                { donut }
            )
        })
        .catch((err)=>{
            console.log('Error finding your donut!');
            console.log(err);
        })
})

//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"

router.post('/', (req, res)=>{
    const newDonutInfo = req.body;

    DonutModel.create(newDonutInfo)
        .then((donut)=>{
            res.redirect(
                'donuts/show',
                    {donut}
            )
        })
        .catch((err)=>{
            console.log('Error posting your new donut!');
            console.log(err);
        })
});

//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it

// router.get('/:id/edit', (req, res)=>{

// });

//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)

// router.put('/:id', (req, res)=>{

// });


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"

// router.delete('/:id', (req, res)=>{

// });

//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;




// Create a GET show route "/:id" that renders the donut's show page
// Create a GET new route "/new" that renders the new.hbs form
// Create a POST index route "/" that creates a new donut and upon success redirects back to the index page
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and sends that donut's data to it
// Create a PUT update route "/:id" that updates the donut and redirects back to the SHOW PAGE (not index)
// Create a DELETE delete route "/:id" that deletes the donut and redirects back to index page "/"
// 🎯 Git add, git commit after each route