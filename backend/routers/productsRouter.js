import express from "express";
import data from "../data.js";
import product from "../models/productsModel.js";

const productsRouter = express.Router();



productsRouter.get("/seed",async (req,res) => {
const createdProducts = await product.insertMany(data.products);

res.send({createdProducts});

});



productsRouter.get("/",async (req,res) => {
    const products = await product.find({});

    res.send(products);


});


productsRouter.get("/:id",async(req,res) => {
    const result = await product.findById(req.params.id);
    if(result){
    res.send(result);
}
else{
    res.status(404).send("Product not found !");
}
})



export default productsRouter;