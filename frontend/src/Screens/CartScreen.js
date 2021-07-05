import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem, removeCartItem } from '../actions/cartActions';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const quantity = props.location.search? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    useEffect(() => {
      if(productId){
          dispatch(addCartItem(productId,quantity));
      }
    }, [dispatch,productId,quantity])


    const removeFromCartHandler = (pid) => {
        dispatch(removeCartItem(pid));
    }

    return (
        <div>
            <h2>Cart Items</h2>
                <div className="row">
                {cartItems.length === 0 ? (<h4 className="alert alert-danger">There is no product in your cart !</h4>) : <div className=" row col-md-12"><div className="col-md-6">
                {cartItems.map(x => 
                <div className="col-md-12 mb-4">
                    <div className="card w-100">
                        <div style={{maxHeight : "100%", maxWidth : "100%", textAlign:"center"}}>
                         <img src={"/"+x.image}  style={{height : "200px"}} alt={x.name}/>
                        </div>
                    <div className="card-body">
                        <h4 className="card-title">{x.name}</h4>
                        <p className="card-text">{x.description}</p>
                        <h6>Price (for each) : {x.price}₺</h6>
                        <h6>Quantity : {x.qty}</h6>
                        <select name="qty" value={x.qty} id="qty" className="form-control" onChange={(e) => dispatch(addCartItem(x.id,Number(e.target.value)))}>
                            { [...Array(x.countInStock).keys()].map(x => <option key={x+1}>{x+1}</option>)  }
                        </select>
                        <button onClick={ () => removeFromCartHandler(x.id)} className="btn btn-primary mt-2">REMOVE FROM CART</button>
                    </div>
                    </div>

                </div>
             
                )
                
                }

            

                   </div>
              
                    <div className="col-md-6">
                    <div className="card w-100 p-5">
                        <h2>CART TOTAL</h2>
                        <div className="card-body">
                            <p>Items Quantity : {cartItems.reduce((a, c) => a + c.qty, 0)} items</p>
                            <p>Total : {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}₺</p>
                            
                    
                        </div>
                        <Link to="/shipping" className="btn btn-success">Proceed to checkout !</Link>

                    </div>

                  

                </div>
                </div>
                 }
            </div>
            </div>
     
    )
}
