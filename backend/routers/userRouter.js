import express from "express";
import data from "../data.js";
import bcrypt from "bcryptjs";
import { generateToken, isAuth } from "../utils.js";
import User from "../models/userModel.js";


const userRouter = express.Router();

userRouter.get("/seed", async (req,res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
})


userRouter.put("/update",isAuth,async(req,res) => {
    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if(req.body.password){
            user.password = bcrypt.hashSync(req.body.password,8);
        }
        const updatedUser = await user.save();
        res.send({
            _id : updatedUser._id,
            name : updatedUser.name,
            email : updatedUser.email,
            isAdmin : updatedUser.isAdmin,
            token : generateToken(updatedUser)

        })

    }

})


userRouter.post("/login", async (req,res) => {
    const userResult = await User.findOne({email : req.body.email});
    if(userResult){
        if(bcrypt.compareSync(req.body.password,userResult.password)){
            res.send({
                _id : userResult._id,
                name : userResult.name,
                email : userResult.email,
                isAdmin : userResult.isAdmin,
                token : generateToken(userResult)
            });
            return;
        }
    }
    res.status(401).send({message : "Invalid Email or Password !"});

})




userRouter.post("/register", async(req,res) => {
    const user = new User({name : req.body.name, email : req.body.email,
    password : bcrypt.hashSync(req.body.password, 8)
    });
    const createdUser = await user.save();
    res.send({
        _id : createdUser._id,
        name : createdUser.name,
        email : createdUser.email,
        isAdmin : createdUser.isAdmin,
        token : generateToken(createdUser)

    });
})



userRouter.get("/",isAuth, async(req,res) => {
    const userDetail = await User.findOne({_id : req.user._id});
    if(userDetail){
        res.send(userDetail);
    }else{
        res.status(401).send({message : "Unauthorized"});
    }

})



export default userRouter;