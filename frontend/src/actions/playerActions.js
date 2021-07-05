import Axios from "axios";
import { PLAYER_DETAIL_REQUEST, PLAYER_DETAIL_SUCCESS, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS} from "../constants/playerConstants";

export const listPlayers = () => async (dispatch) => {
    dispatch({
        type : PLAYER_LIST_REQUEST
    });
  
  const {data} = await Axios.get("http://localhost:8080/api/players");
    dispatch({type: PLAYER_LIST_SUCCESS , payload: data});
 
   

}





export const detailsPlayer = (playerId) => async (dispatch) => {
    dispatch({
        type : PLAYER_DETAIL_REQUEST, payload: playerId
    });
    const {data} = await Axios.get(`http://localhost:8080/api/players/${playerId}`);
    dispatch({type: PLAYER_DETAIL_SUCCESS , payload: data});
}