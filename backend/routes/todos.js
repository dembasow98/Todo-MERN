const router = require('express').Router();

//import the todo model for usage purposes:
let Todo = require('../models/todo');



//Get all todos:
router.route('/').get((req, res)=>{
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error - '+err));
})

//Add new todo by id:
router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const title = req.body.title;
    const description  = req.body.description;
    const visibility = req.body.visibility;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    //create the new todo:
    const todo = new Todo({
        username,
        title,
        description,
        visibility,
        startDate,
        endDate
    });

    //Save the new todo to the database:
    todo.save()
        .then(() => res.json('Todo added to the database successfully!'))
        .catch(err =>res.status(400).json('Error - '+ err));
});


//Get the todo by id
router.route('/:id').get((req, res) =>{
    Todo.findById(req.params.id)
        .then((todo) =>res.json(todo))
        .catch(err => res.status(400).json('Error - '+err));
});

//Update todo by id:
router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id)
        .then((todo) =>{
            todo.username = req.body.username,
            todo.title = req.body.title,
            todo.description = req.body.description,
            todo.visibility = req.body.visibility,
            todo.startDate = req.body.startDate,
            todo.endDate = req.body.endDate

            //Save todo:
            todo.save()
                .then(() => res.json('Todo updated successfully!'))
                .catch(err => res.status(400).json('Error - '+err));
        })
        .catch(err => res.status(400).json('Error - '+err));
});

//Delete todo by id:
router.route('/:id').delete((req, res)=>{
    Todo.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Todo deleted successfully!'))
        .catch(err => res.status(400).json('Error - '+err));
});


//Export router
module.exports = router;