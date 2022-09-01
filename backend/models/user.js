import {mongoose } from 'mongoose';
//export the schema from mongoose:

const Schema = mongoose.Schema;


//Create the user schema:
const userSchema = new Schema(
    {
        'usename': {Type: String, required:true, unique:true, trim:true, minLenght:3},
        'profession':{Type:String, required:true, unique:true},
        'createdAt':{Type:Date},
        'updatedAt':{type:Date}
    },
    {
        timestamps:true,
    }
);

//Create the user model and pass the schema
const User = mongoose.model('User', userSchema);

//export the model
module.exports = User;

