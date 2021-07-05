import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default withRouter(function Product(props) {

    const {product} = props;
    const url = "/product/"+product._id;


    const addToCartButtonHandler = () => {
        props.history.push(`/cart/${product._id}?point=1`);
    }


    return (
        <div>
            
            <div className="card w-100 mb-4" >
            <div style={{ maxWidth : "100%", maxHeight:"100%", textAlign : "center" }}>
            <img src={product.img} alt={product.name}  style={{ height : "200px"}} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h3 className="font-weight-bold">{product.price}₺</h3>
                <h3 className="font-weight-bold">Stock : {product.stock}</h3>
                <Link to={url} className="btn btn-primary mt-2">Product Detail</Link>
                <div>
                <button onClick={addToCartButtonHandler} className="btn btn-primary mt-2">ADD TO CART</button>
                </div>
            </div>
            </div>
        </div>
    )
})
