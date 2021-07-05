import mongoose from "mongoose";


const productsSchema = mongoose.Schema({
    name : {type : String, required : true, unique: false},
    stock : {type : Number, required : true},
    price : {type : Number, required : true},
    description : {type : String, required : false},
    img : {type : String, required : false, default : "null"}

},{timestamps : true});


const product = mongoose.model("Products",productsSchema);


export default product;