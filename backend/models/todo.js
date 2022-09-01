const mongoose = require('mongoose');
const {Schema }= mongoose;


const todoSchema = new Schema(
    {
        'username': {type:String, required: true, unique:true, trim:true, minLength:3},
        'title':{type: String, required:true},
        'description':{type:String, required:true},
        'visibility':{type:String, required:true},
        'startDate':{type: Date, required:true},
        'endDate':{type: Date, required:true},
    },
    {
        timestamps: true,
    }
);


//Create the module and asign the schema
const Todo = mongoose.model('Todo', todoSchema);


//export the model:
module.exports = Todo;
