const mongoose = require('mongoose');
//export the schema from mongoose:

const Schema = mongoose.Schema;


//Create the user schema:
const userSchema = new Schema(
    {
        'username': {type: String, required:true, unique:true, trim:true, minLenght:3},
        'profession':{type:String, required:true},
    },
    {
        timestamps:true,
    }
);

//Create the user model and pass the schema
const User = mongoose.model('User', userSchema);

//export the model
module.exports = User;