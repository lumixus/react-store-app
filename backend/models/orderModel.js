import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderItems : [{
        name : {type : String, required : true},
        qty : {type : Number, required : true},
        image : {type : String, required : true},
        price : {type : Number, required : true},
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Products',
            required : true
        }
    }],
    shippingAddress : {
        fullName : {type : String, required : true},
        address : {type : String,required : true},
        number : {type : String, required : true},
        city : {type : String, required : true},
        postalcode : {type: String, required : true},
        country : {type : String, required : true},
        email : {type : String, required : true},

    },
    paymentMethod : {type : String, required : true},
    itemsPrice : {type : Number, required : true},
    shippingPrice : {type : Number, required : false, default : 0},
    taxPrice : {type : Number, required : true},
    totalPrice : {type : Number, required : true},
    user : {type : mongoose.Schema.Types.ObjectId, ref : "User", required : true},
    isPaid : {type : Boolean, default : false,required : true},
    paidAt : {type : Date},
    isDelivered : {type : Boolean, default : false, required : true},
    deliveredAt : {type : Date}


},
{timestamps : true}


)

const Order = mongoose.model('Order',orderSchema);
export default Order;