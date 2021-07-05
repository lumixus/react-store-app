import { ADD_FAVOURITE_PLAYER, REMOVE_FAVOURITE_PLAYER } from "../constants/cartConstants";

export const favouritesReducer = (state = {cartItems : []},action) => {
    switch(action.type){
        case ADD_FAVOURITE_PLAYER:
            const item = action.payload;
            const existItem = state.favouritePlayers.find(x => x.id === item.id);
            if(existItem){
               
                return {
                    ...state,
                    favouritePlayers : state.favouritePlayers.map(x => x.id === existItem.id ? item : x),
                }
            } else{
                return {...state, favouritePlayers : [...state.favouritePlayers, item]}
            }
        case REMOVE_FAVOURITE_PLAYER :
            return {
                ...state,
                favouritePlayers : state.favouritePlayers.filter(x => x.id !== action.payload)

            };
    
        default :
            return state;

    }
}