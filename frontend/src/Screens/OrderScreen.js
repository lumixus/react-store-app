import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../actions/orderActions';
import LoaderBox from '../Components/LoaderBox.js';

export default function OrderScreen(props) {
    const orderId = props.match.params.id;
    const orderDetails = useSelector(state => state.orderDetails);
    const {loading,order,error} = orderDetails;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getOrder(orderId));
    },[orderId,dispatch])
    return (
        <div>
            {loading? <LoaderBox></LoaderBox> : error ? <h4 className="alert alert-danger">{error}</h4> : <div>

            <h2 className="mb-4">ORDER DETAILS</h2>
            <div className="row">
            <div className="col-md-8 ">
                <div className="row">
                    <div className="card bg-light  col-md-12">
                        <div className="card-body">
                                <h5 className="font-weight-bold mb-5">Shipping Address</h5>
                            { <p><b>Full Name :</b> {order.shippingAddress.fullName }</p>}
                                <p><b>Address :</b> {order.shippingAddress.address }</p>
                                <p><b>Postal Code :</b> {order.shippingAddress.postalcode }</p>
                        </div>
                    </div>
                    <div className="card bg-light  col-md-12 mt-4">
                    <div className="card-body">
                            <h5 className="font-weight-bold mb-5">Payment Method</h5>
                        { <p><b>Method :</b> {order.paymentMethod }</p>}
                    </div>
                    </div>
                    <div className="card bg-light  col-md-12 mt-4">
                        <div className="card-body">
                            
                                <h5 className="font-weight-bold mb-5">Order Items</h5>
                                <div className="row">
                                    {order.orderItems.map(x => 
                                    <div className="col-md-12" key={x._id}>
                                        <div className="row font-weight-bold">
                                            <div className="col-md-3"><div style={{height:"200px",width:"100%"}}><img style={{maxHeight:"100%",maxWidth:"100%"}} alt={x.name} src={"../"+x.image} /></div></div>
                                            <div className="col-md-5">{x.name}</div>
                                            <div className="col-md-3">{x.qty} x {x.price}₺</div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            
                        </div>
                    </div>
                </div>
                
</div>
    <div className="col-md-4 col-sm-12">
        <div className="card bg-light">
            <div className="card-body">
                <h5>Order Summary</h5>
                <div className="row mt-4">
                    <div className="col-md-8">
                        Items
                    </div>
                    <div className="col-md-4">
                        {order.itemsPrice}₺
                    </div>
                    <div className="col-md-8">
                        Shipping
                    </div>
                    <div className="col-md-4">
                    {order.shippingPrice.toFixed(2)}₺
                    </div>
                    <div className="col-md-8">
                        Tax
                    </div>
                    <div className="col-md-4">
                    {order.taxPrice}₺
                    </div>
                    <div className="col-md-8 font-weight-bold">
                        Tax
                    </div>
                    <div className="col-md-4 font-weight-bold">
                    {order.taxPrice}₺
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</div>

</div>
}
        </div>
    )
}
