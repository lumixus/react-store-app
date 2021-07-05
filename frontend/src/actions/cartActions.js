import axios from "axios"
import {ADD_FAVOURITE_PLAYER, REMOVE_FAVOURITE_PLAYER , ADD_CART_ITEM, REMOVE_CART_ITEM, CART_SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD } from "../constants/cartConstants";

export const addFavouritePlayer = (playerId,point) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/players/${playerId}`);

    dispatch({type : ADD_FAVOURITE_PLAYER, payload : {id : data._id,username : data.username, level : data.level, str : data.str, def : data.def, point} });

    localStorage.setItem("favouritePlayers",JSON.stringify(getState().favourites.favouritePlayers));
}




export const removeFavouritePlayer = (playerId) => (dispatch, getState) => {
    dispatch({type : REMOVE_FAVOURITE_PLAYER, payload: playerId});

    localStorage.setItem("favouritePlayers",JSON.stringify(getState().favourites.favouritePlayers));
}



export const addCartItem = (productId,qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${productId}`);

    dispatch({type : ADD_CART_ITEM, payload : {id : data._id,name : data.name, price : data.price, description : data.description, image : data.img, countInStock : data.stock, qty} });

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
}

export const removeCartItem = (productId) => (dispatch, getState) => {
    dispatch({type : REMOVE_CART_ITEM, payload: productId});

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
}



export const saveShippingAddress = (data) => (dispatch) => {
dispatch({type : CART_SAVE_SHIPPING_ADDRESS, payload : data});

localStorage.setItem('shippingAddress',JSON.stringify(data));
}


export const savePaymentMethod = (paymentmethod) => (dispatch) => {
dispatch({type : SAVE_PAYMENT_METHOD , payload:paymentmethod});
}


