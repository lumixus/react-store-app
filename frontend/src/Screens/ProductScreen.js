import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../actions/productActions';
import LoaderBox from '../Components/LoaderBox';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetail = useSelector((state) => state.productDetail);
    const {loading,error,product} = productDetail;
    const [qty,setQty] = useState(1);

   


    useEffect(() => {
        dispatch(getProductDetail(productId));
    }, [dispatch,productId])


    const addToCartButtonHandler = () => {
        props.history.push(`/cart/${productId}?point=${qty}`);
    }


    return (
        <div>
            {loading? <LoaderBox></LoaderBox> : error ? (<div className="alert alert-danger">{error}</div>) : !product ? (<div className="alert alert-danger">PRODUCT NOT FOUND</div>) : (
        <div className="card w-100 mb-4" >
        <div style={{ maxWidth : "100%", maxHeight:"100%", textAlign : "center" }}>
        <img src={"/"+product.img} alt={product.name}  style={{ height : "200px"}} />
        </div>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <h3 className="font-weight-bold">{product.price}₺</h3>
            <h3 className="font-weight-bold">Stock : {product.stock}</h3>
            
            <select className="form-control mb-2" value={qty} onChange={(e) => setQty(e.target.value)} >
                {
                    [...Array(product.stock).keys()].map(x => (<option value={x+1}>{x+1}</option>))

                }
            </select>


            <button className="btn btn-primary" onClick={addToCartButtonHandler}>ADD TO CART</button>
            
            

        </div>
        </div>
        )}
    </div>
    )
}
