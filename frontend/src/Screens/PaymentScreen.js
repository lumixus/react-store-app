import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../Components/CheckoutSteps';

export default function PaymentScreen(props) {
    const [paymentMethod,setPaymentMethod] = useState("Paypal");
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress.address){
        props.history.push("/shipping");
    }
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(savePaymentMethod(paymentMethod));
        props.history.push("/placeorder");
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            
            <h2 className="mt-5">Select Payment Method</h2>

            Paypal<br />
            <input type="radio" name="paymentmethod" value="PayPal" checked onChange={e => setPaymentMethod(e.target.value)} /><br />


            Stripe<br />
            <input type="radio" name="paymentmethod" value="Stripe" onChange={e => setPaymentMethod(e.target.value)} />

            <br />
            <button className="btn btn-success" onClick={submitHandler}>Continue</button>

        </div>
    )
}
