import express from "express";
import data from "../data.js";
import player from "../models/playersModel.js";


const playerRouter = express.Router();


playerRouter.get("/seed",async (req,res) => {
    const players = await player.insertMany(data.players);
    res.send({players});
})


playerRouter.get("/",async (req,res) => {
    const players = await player.find({});
    res.send(players);
})

playerRouter.get("/:id", async (req,res) => {

    const id = req.params.id;
    const playerResult = await player.findById(id);
    if(playerResult){
    res.send(playerResult);
}else{
    res.status("404").send("Player not found !");
}
})

export default playerRouter;