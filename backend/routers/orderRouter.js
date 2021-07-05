import express from 'express';
import mongoose from 'mongoose';
import Order from '../models/orderModel.js';
import user from '../models/userModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();


orderRouter.get("/mine",isAuth,async (req,res) => {
    
    const orders = await Order.find({user : req.user._id});
    if(orders){
        res.status(200).send(orders);
    }else{
        res.status(404).send({message : "Orders not found !"});
    }  





orderRouter.post('/',isAuth,async(req,res) => {
    if(req.body.orderItems.length === 0){
        res.status(400).send({message : 'Cart is empty'});
    }else{
        const order = new Order({
            orderItems : req.body.orderItems,
            shippingAddress : req.body.shippingAddress,
            paymentMethod : req.body.paymentMethod,
            itemsPrice : req.body.itemsPrice,
            taxPrice : req.body.taxPrice,
            totalPrice : req.body.totalPrice,
            user : req.user._id

        });
        const createdOrder = await order.save();
        res.status(201).send({message : "New Order Created", order : createdOrder});
    }
})



orderRouter.get("/:id", isAuth, async(req,res) => {
    const order = await Order.findById(req.params.id);
    if(order){
        res.status(200).send(order);
    }else{
        res.status(404).send({message : "Order not found !"});
    }
    
})



 

})


export default orderRouter;