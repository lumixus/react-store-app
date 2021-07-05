import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../Components/CheckoutSteps.js'
export default function ShippingAddressScreen(props) {
    const userSignin = useSelector((state) => state.userLogin);
    const { userInfo } = userSignin;
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [city,setCity] = useState('');
    const [country,setCountry] = useState('');
    const [postalcode,setPostalCode] = useState('');
    const [address,setAddress] = useState('');
    if(!userInfo){
        props.history.push("/login")
    }
    const dispatch = useDispatch();

    const submitHandler = (e) => {
            e.preventDefault();
            dispatch(saveShippingAddress({fullName,email,number,city,country,postalcode,address}));
            props.history.push("/payment");
    }

    return (
        <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="shippingForm" onSubmit={submitHandler}>
                <div className="form-group">
                    <h4 className="mt-3 font-weight-bold mb-4">
                        Shipping Address Form
                    </h4>
                    <div className="form-group">
                    <label htmlFor="name" className="font-weight-bold">Full Name</label>
                    <input type="text" className="form-control" name="name" value={fullName} onChange={(e) => setFullName(e.target.value)} id="name" placeholder="Enter full name"/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="email" className="font-weight-bold">E-Mail</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Enter email"/>
                    </div>
                    

                    <div className="form-group">
                    <label htmlFor="number" className="font-weight-bold">Phone Number</label>
                    <input type="text" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} name="number" id="number" placeholder="Enter number"/>
                    </div>
                    

                    <div className="form-group">
                    <label htmlFor="city" className="font-weight-bold">City</label>
                    <input type="text" className="form-control" name="city" id="city" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="country" className="font-weight-bold">Country</label>
                    <input type="text" className="form-control" value={country} placeholder="Enter country" onChange={(e) => setCountry(e.target.value)} name="country" id="country"/>
                    </div>


                    <div className="form-group">
                    <label htmlFor="postalCode" className="font-weight-bold">Postal Code</label>
                    <input type="text" className="form-control" value={postalcode} placeholder="Enter postal code" onChange={(e) => setPostalCode(e.target.value)} name="postalCode" id="postalCode"/>
                    </div>


                    <div className="form-group">
                    <label htmlFor="address" className="font-weight-bold">Address</label>
                    <input type="text" className="form-control" value={address} placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} name="address" id="address"/>
                    </div>

                    <button className="btn btn-warning font-weight-bold w-100" type="submit">Continue</button>
                </div>

            </form>

        </div>
    )
}
