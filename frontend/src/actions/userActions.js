import axios from "axios";
import {USER_DETAIL_FAIL, USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_UPDATE_FAIL, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS} from "../constants/userConstants";

export const userLogin = (email,password) => async (dispatch) => {
    dispatch({type : USER_LOGIN_REQUEST, payload : {email,password} });
    try {
        const result = await axios.post("/api/users/login",{email, password});
        dispatch({type : USER_LOGIN_SUCCESS, payload : result});
        localStorage.setItem("userInfo",JSON.stringify(result));
    } 
 catch (error) {
        dispatch({type:USER_LOGIN_FAILED, payload : error.response && error.response.data.message ? error.response.data.message : error.message});
}
}




export const userLogout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    dispatch({type : USER_LOGOUT});
}



export const register = (name, email, password) => async (dispatch) => {

    dispatch({type : USER_REGISTER_REQUEST});
    try{
        const data = await axios.post("/api/users/register",{name,email,password});
        dispatch({type : USER_REGISTER_SUCCESS, payload : data});
        dispatch({type : USER_LOGIN_SUCCESS, payload : data});
        localStorage.setItem("userInfo",JSON.stringify(data));
    }catch(error){
        dispatch({type:USER_REGISTER_FAILED, payload : error.response && error.response.data.message ? error.response.data.message : error.message});
    }

}



export const getUserDetail = () => async (dispatch,getState) => {
    dispatch({type:USER_DETAIL_REQUEST});
    const {userLogin : {userInfo} } = getState();
    try {
        const {data} = await axios.get(`/api/users`, { headers : { Authorization : `Bearer ${userInfo.data.token}`} })
        dispatch({type:USER_DETAIL_SUCCESS,payload : data});
    } catch (error) {
        dispatch({type:USER_DETAIL_FAIL,payload : error.response && error.response.data.message ? error.response.data.message : error.message});
    }

}



export const updateUserProfile = (userData) => async(dispatch,getState) => {
    dispatch({type : USER_PROFILE_UPDATE_REQUEST});
    const {userLogin : {userInfo} } = getState();
    try {
        const {data} = await axios.put("/api/users/update",userData, {headers : {Authorization : `Bearer ${userInfo.data.token}`}});
        dispatch({type : USER_PROFILE_UPDATE_SUCCESS,payload : data});
    } catch (error) {
        dispatch({type : USER_PROFILE_UPDATE_FAIL,payload : error.response && error.reponse.data.message ? error.reponse.data.message : error.message});
    }
}