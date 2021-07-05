import {applyMiddleware,combineReducers,compose , createStore} from "redux";
import {playerListReducer} from "./reducers/playerReducers";
import thunk from "redux-thunk";
import { playerDetailReducer } from "./reducers/playerDetailReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userDetailReducer, userLoginReducer, userProfileReducer, userRegisterReducer } from "./reducers/userReducers";
import { productDetailReducer, productListReducer } from "./reducers/productReducers";
import { favouritesReducer } from "./reducers/favouritesReducer";
import { orderDetailsReducer, orderReducer, ordersReducer } from "./reducers/orderReducers";
const initialState = {
    userLogin : {
        userInfo : localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
    },
favourites :{ 
    favouritePlayers : localStorage.getItem("favouritePlayers") ? JSON.parse(localStorage.getItem("favouritePlayers")) : [],
},
cart : {
    cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    shippingAddress : localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {},
    paymentMethod : "PayPal"
}
};

const reducer = combineReducers({
    playerList : playerListReducer,
    playerDetail : playerDetailReducer,
    cart : cartReducer,
    favourites : favouritesReducer,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    productsList : productListReducer,
    productDetail : productDetailReducer,
    order : orderReducer,
    orderDetails : orderDetailsReducer,
    orders : ordersReducer,
userDetail : userDetailReducer,
    userProfile : userProfileReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));


export default store;