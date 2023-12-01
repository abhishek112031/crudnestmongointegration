import mongoose from 'mongoose';


export const userSchema=new mongoose.Schema({

    first_name:{type:String},
    last_name:{type:String},
    age:{type:Number},
    email:{type:String}


});

export interface User extends mongoose.Document{
    first_name:string;
    last_name:string;
    age:number;
    email:string;

}