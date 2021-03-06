import { ORDERS_FAIL, ORDERS_REQUEST, ORDERS_SUCCESS, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_DETAIL_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS } from "../constants/orderConstants";

export const orderReducer = (state = {},action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {loading : true}
        case ORDER_CREATE_SUCCESS:
            return {loading : false, success : true, order : action.payload} 
        case ORDER_CREATE_FAIL:
            return {loading : false, success : false, error : action.payload}
        case ORDER_CREATE_RESET:
            return {};

        default:
            return state;
    }
}



export const orderDetailsReducer = (state = {loading : true, order : {}, orders : [] },action) => {
    switch (action.type) {
        case ORDER_DETAIL_REQUEST:
            return {loading : true};

        case ORDER_DETAIL_SUCCESS:
            return {loading:false,order : action.payload};
        case ORDER_DETAIL_FAIL :
            return {loading : false, error : action.payload};

        default:
            return state;
    }
}


export const ordersReducer = (state = {loading : true, orders : []}, action) => {
    switch (action.type) {
        case ORDERS_REQUEST:
            return{loading : true};
        case ORDERS_SUCCESS:
            return {loading:false,orders : action.payload};
        case ORDERS_FAIL:
            return {loading:false,error : action.payload};
        default:
            return state;
    }
}