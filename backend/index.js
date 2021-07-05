import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import playerRouter from "./routers/playerRouter.js";
import productsRouter from "./routers/productsRouter.js";
import dotenv from "dotenv";
import orderRouter from "./routers/orderRouter.js";
dotenv.config();


const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/playerszone",{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true

})

app.use(cors());




app.use("/api/users",userRouter);
app.use("/api/players",playerRouter);
app.use("/api/products",productsRouter);
app.use("/api/orders",orderRouter);




app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on : 8080");
})