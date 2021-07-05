import axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import { ORDERS_FAIL, ORDERS_REQUEST, ORDERS_SUCCESS, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAIL_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS } from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch,getState) => {
    dispatch({type : ORDER_CREATE_REQUEST, payload : order});
    try {
        const {userLogin : {userInfo}} = getState();
        const {data} = await axios.post("/api/orders",order, {
            headers : {
                Authorization : `Bearer ${userInfo.data.token}`
            }
        });
        dispatch({type : ORDER_CREATE_SUCCESS, payload : data.order});
        dispatch({type : CART_EMPTY});
        localStorage.removeItem("cartItems");
    }catch(error){

    }

}


export const getOrder = (orderId) => async (dispatch, getState) => {
    dispatch({type:ORDER_DETAIL_REQUEST, payload : orderId});
    const {userLogin : {userInfo} } = getState();
    try {
    const {data} = await axios.get(`/api/orders/${orderId}` , { headers : { Authorization : `Bearer ${userInfo.data.token}`} });
    dispatch({type: ORDER_DETAIL_SUCCESS, payload : data});
    } 
    catch (error) {
        dispatch({type : ORDER_DETAIL_FAIL, payload : error.response && error.response.data.message ? error.response.data.message : error.message});
    }
    
}


export const getOrders = () => async(dispatch,getState) => {
    dispatch({type : ORDERS_REQUEST});
    const {userLogin : {userInfo} } = getState();
    try {
        const {data} = await axios.get("/api/orders/mine",{ headers : {Authorization : `Bearer ${userInfo.data.token}` } });
        dispatch({type : ORDERS_SUCCESS, payload : data});

    } catch (error) {
        dispatch({type : ORDERS_FAIL, payload : error});
    }
}