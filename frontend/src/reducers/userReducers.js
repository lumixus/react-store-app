import { USER_DETAIL_FAIL, USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_UPDATE_FAIL, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading:true}
      
        case USER_LOGIN_SUCCESS:

            return {loading:false, userInfo : action.payload}
        case USER_LOGIN_FAILED:
            return {loading:false, error : action.payload}
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
}



export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading : true};
        case USER_REGISTER_SUCCESS :
            return {loading : false, userInfo : action.payload};    
        case USER_REGISTER_FAILED:
            return {loading : false,error : action.payload};
        default:
            return state;
    }
}


export const userDetailReducer = (state = {loading : true }, action) => {
    switch (action.type) {
        case USER_DETAIL_REQUEST:
            return {loading : true}
            
        case USER_DETAIL_SUCCESS:
            return {loading : false, uDetail : action.payload};
        case USER_DETAIL_FAIL:
            return {loading : false, error : action.payload};
        default:
            return state;
    }
}



export const userProfileReducer = (state = {loading : true}, action) => {
    switch (action.type) {
        case USER_PROFILE_UPDATE_REQUEST:
            return {loading : true};
        case USER_PROFILE_UPDATE_SUCCESS:
            return {loading : false, success : true, user : action.payload};
        case USER_PROFILE_UPDATE_FAIL:
            return {loading : false, error : true,success : false};
        default:
            return state;
    }
}