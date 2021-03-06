import axios from "axios";
import { PRODUCT_DETAIL_FAILED, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"


export const listProducts = () => async (dispatch) => {
    dispatch({type: PRODUCT_LIST_REQUEST});

    try{
    const {data} = await axios.get("/api/products");
    dispatch({type : PRODUCT_LIST_SUCCESS, payload : data})

}catch(error){
    dispatch({type : PRODUCT_LIST_FAILED, 
        
        payload : error.response && error.response.data.message ? error.response.data.message : error.message
    
    })
}
    

}


export const getProductDetail = (id) => async (dispatch) => {
    dispatch({type : PRODUCT_DETAIL_REQUEST, payload : id});

    try{
        const {data} = await axios.get(`/api/products/${id}`);

        dispatch({type : PRODUCT_DETAIL_SUCCESS, payload : data});
    }catch(error){
        dispatch({type : PRODUCT_DETAIL_FAILED,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}