import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../actions/orderActions.js';
import CheckoutSteps from "../Components/CheckoutSteps.js"
import { ORDER_CREATE_RESET } from '../constants/orderConstants.js';
import LoaderBox from '../Components/LoaderBox.js';


export default function PlaceOrderScreen(props) {
    const cart = useSelector(state => state.cart);
    const {paymentMethod, shippingAddress, cartItems} = cart;
    if(!cart.paymentMethod){
        props.history.push("/payment");
    }
    const orderState = useSelector(state => state.order);
    const {loading,success,order,error} = orderState;

    const toPrice = (num) => Number(num.toFixed(2));
    cart.itemsPrice = toPrice(cartItems.reduce((a,b) => a + b.price*b.qty,0));
    cart.taxPrice = toPrice(0.18 * cart.itemsPrice);
    cart.totalPrice = toPrice(cart.taxPrice + cart.itemsPrice);

    const dispatch = useDispatch();
    const placeOrderHandler = () => {
        dispatch(createOrder({...cart,orderItems : cart.cartItems,}))
    }

    useEffect(() => {
        if(success){
            props.history.push(`/order/${order._id}`);
            dispatch({type : ORDER_CREATE_RESET});
        }
    }, [dispatch, order, props.history, success])

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <h2 className="mt-4 mb-4">Place Order </h2>

            <div className="card p-4 font-weight-bold">
                <div className="row">
                    <div className="col-md-6">
                <h3 className="card-title">Shipping Address :</h3>

                <div>Name : {shippingAddress.fullName}</div>
                <div>Country : {shippingAddress.country}</div>
                <div>Postal Code : {shippingAddress.postalcode}</div>
                <div>Address : {shippingAddress.address}</div>
                </div>
                <div className="col-md-6">
                    <h3>Payment Method</h3>
                    <h5>{paymentMethod}</h5>
                </div>
                </div>
                <div className="row mt-5">
            <div className="col-md-6">
            {cartItems.map(x => 
            <div className="col-md-12" key={x._id}>
                <div className="row mt-4 " style={{}}>
                    <div style={{height : "200px"}} className="col-md-4" >
                    <img src={x.image} style={{maxHeight : "100%", maxWidth: "100%"}} alt=""/>
                    </div>
                    <div className=" col-md-8">
                        <div>
                            Product Name : {x.name}
                        </div>
                        <div>
                            Product Price : {x.price}₺
                        </div>
                        <div>
                            Quantity : {x.qty}
                        </div>
                  
                    </div>
                </div>
            </div>
            )}
            </div>

            <div className="col-md-6">
                <div className="card p-4">
                <h2 className="card-title">Cart Total</h2>
                <hr/>
                <div className="card-body">
                    <div> Items Quantity : {cartItems.reduce((a,c) => a += c.qty, 0)} </div>
                    <div>Items Total : {cart.itemsPrice}₺</div>
                    <div> Tax Total : {cart.taxPrice}₺</div>
                    <div> Total : {cart.totalPrice}₺ </div>
                    <div><button  className="btn btn-warning w-100 mt-5" onClick={placeOrderHandler} disabled={cart.cartItems.length === 0}>Place Order</button></div>
                    {loading && <LoaderBox></LoaderBox>}
                    {error && <h4 className="alert alert-danger">{error}</h4>}
                </div>
                </div>
            </div>

            </div>

            </div>

           

        </div>
    )
}
