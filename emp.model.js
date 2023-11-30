import mongoose from "mongoose";
const Employee_schema=new mongoose.Schema({
    Empid:{type:Number},
    Name:{type:String},
    Email:{type:String},
    Phone:{type:Number},
    Address:{type:String},
    Salary:{type:Number},
    Designation:{type:String},
    Experience:{type:Number},
    Photo:{type:String}
})

export default mongoose.model.Movies||mongoose.model("Movie",Employee_schema)