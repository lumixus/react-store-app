import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../actions/orderActions';
import LoaderBox from '../Components/LoaderBox';

export default function OrderHistoryScreen(props) {
    const dispatch = useDispatch();
    const ordersState = useSelector(state => state.orders);
    const {loading,orders,error} = ordersState;
    useEffect(() => {
            dispatch(getOrders());
    },[dispatch])
    return (
        <div>
            <h2>Order History</h2>
            {loading? <LoaderBox></LoaderBox> : error ? <h4 className="alert alert-danger">{error}</h4> : <div>
                <div className="table-responsive">
            <table className="table table-striped mt-5 ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>PAID</th>
                        <th>DELIVERED</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(o => 
                        <tr key={o._id}>
                            <td>{o._id}</td>
                            <td>{o.createdAt.substring(0,10)}</td>
                            <td>{o.totalPrice.toFixed(2)}₺</td>
                            <td>{o.isPaid ? o.paidAt.substring(0,10) : "No"}</td>
                            <td>{o.isDelivered ? o.paidAt.substring(0,10) : "No"}</td>
                            <td><button onClick={() => props.history.push(`/order/${o._id}`)} className="btn btn-primary" style={{fontSize:"16px"}}>Details</button></td>
                        </tr>
                        )}
                </tbody>
            </table>
            </div>
            </div>
            }
        </div>

    )
}
