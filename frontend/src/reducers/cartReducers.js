import { ADD_CART_ITEM, CART_EMPTY, CART_SAVE_SHIPPING_ADDRESS, REMOVE_CART_ITEM, SAVE_PAYMENT_METHOD } from "../constants/cartConstants";

export const cartReducer = (state = {favouritePlayers : [], cartItems : []},action) => {
    switch(action.type){
        case ADD_CART_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.id === item.id);
            if(existItem){
                
                return {
                    ...state,
                    cartItems : state.cartItems.map(x => x.id === existItem.id ? item : x),
                }
            } else{
                return {...state, cartItems : [...state.cartItems, item]}
            }
        case REMOVE_CART_ITEM :
            return {
                ...state,
                cartItems : state.cartItems.filter(x => x.id !== action.payload)

            };
        case CART_SAVE_SHIPPING_ADDRESS:
            return {...state, shippingAddress : action.payload}
        case SAVE_PAYMENT_METHOD:
            return {...state, paymentMethod : action.payload}
        case CART_EMPTY:
            return { ...state, cartItems : [] }
        default :
            return state;

    }
}