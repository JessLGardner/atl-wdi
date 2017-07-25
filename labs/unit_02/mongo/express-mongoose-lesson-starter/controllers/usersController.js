var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE  GET
router.get('/', (req, res)=>{
    
    User.find({})     //this makes a promise
        .then((users)=>{
            // console.log(users[0]._id) //<<< in index route (edited)
            res.render('users/index', {
                users:users
            });
        })
        .catch((err)=>{
            console.log('ERROR!');
        });
})

// USER CREATE FORM
router.get('/new', (req, res)=>{
    res.render('users/new');
})

// USER CREATE ROUTE
router.post('/', (req, res)=>{
    const newUser = new User(req.body);

    newUser.save()
        .then((newUser)=>{
            console.log('new user created');

            res.render('/users/show',{
                user: user
            })
        .catch((err)=>{
            if(err){
            console.log("ERROR saving to database")
            }
        })
})


// USER SHOW ROUTE GET
// 5977989bd75c274b2bd0e40b
router.get('/:id', (req, res)=>{
    
    User.findById(req.params.id)
        .then((user)=>{
            res.render('users/show', {
                user: user
            })
        })
})

// USER DESTROY 
router.get('/:id/delete', (req, res)=>{

    const userIdToDelete = req.params.id;

    User.findByIdAndRemove(userIdToDelete)
        .then(()=>{
            console.log(`Successfully deleted user with ID ${userIdToDelete}`);

            res.redirect('/users');
        })
})


// USER UPDATE ROUTE


// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;