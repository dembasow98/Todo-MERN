import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;


const todoSchema = new Schema(
    {
        'username': {Type:String, required: true, unique:true, trim:true, minLength:3},
        'title':{Type: String, required:true},
        'description':{Type:String, required:true},
        'visibility':{Type:String, required:true},
        'startDate':{Type: Date, required:true},
        'endDate':{Type: Date, required:true},
    },
    {
        timestamps: true,
    }
);


//Create the module and asign the schema
const Todo = mongoose.model('Todo', todoSchema);


//export the model:
module.exports = Todo;
