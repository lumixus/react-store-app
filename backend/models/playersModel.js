import mongoose from "mongoose";


const playerSchema = mongoose.Schema({
    username : {type : String, required : true, unique: true},
    level : {type : Number, required : true},
    str : {type : Number, required : true},
    def : {type : Number, required : true},
    profile_img : {type : String, required : false, default : "null"}

},{timestamps : true});


const player = mongoose.model("Players",playerSchema);


export default player;