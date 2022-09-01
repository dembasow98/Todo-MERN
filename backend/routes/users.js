//import express router:
const router = require('express').Router();

//Import the user model for usage purposes:
let User = require ('../models/user');



//If a get request is made to the root(root ends with slash): then get all the users
router.route('/').get((req, res)=>{
    User.find()
        .then(users => res.json(users)) //Get all users (and return)in json form
        .catch(err => res.status(400).json('Error - '+ err));
});


//If a post request is made to the root(root ends with /add): then add new user
router.route('/add').post((req, res) =>{ 
    const username = req.body.username;
    const profession = req.body.profession;
    //Create new user:
    const user = new User({
        username,
        profession
    });
    //Add the user to the database:

    user.save()
        .then(() => res.json('User added to the database successfully!'))
        .catch(err => res.status(400).json('Error - '+err));

});


//Get user info by id:

router.route('/:id').get((req, res) =>{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).res.json('Error - '+err))
});

//Update user by id:
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user =>{
            user.username = req.body.username;
            user.profession = req.body.profession;
            

            //save the user:
            user.save()
                .then(() => res.json('User updated successfully!'))
                .catch(err => res.status(400).json('Error - '+err));
        })
        .catch(err => res.status(400).json('Error - '+ err));
});

//Delete the user by id:

router.route('/:id').delete((req, res) =>{
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted successfully!'))
        .catch(err =>res.status(400).json('Error - '+ err));
});


//export the router
module.exports = router;