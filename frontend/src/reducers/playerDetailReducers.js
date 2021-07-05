import { PLAYER_DETAIL_REQUEST, PLAYER_DETAIL_SUCCESS } from "../constants/playerConstants";

export const playerDetailReducer = (state = {player : {}, loading : true},action) => {
    switch(action.type){
        case PLAYER_DETAIL_REQUEST:
            return {loading : true};
        case PLAYER_DETAIL_SUCCESS:
            return {loading: false, player : action.payload};
        default:
            return state;
    }
}