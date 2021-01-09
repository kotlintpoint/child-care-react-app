import { userConstants } from "../_constants";

const initialUser={
    isLoading:false,
    user:{},
    error:''
}

export const userReducer=(state=initialUser, action)=>{
    switch(action.type){
        case userConstants.CREATE_CENTER_REQUEST:
            return{
                isLoading:true,
                user:{},
                error:''
            }
        case userConstants.CREATE_CENTER_SUCCESS:
            return{
                isLoading:false,
                user:{},
                error:''
            }
        case userConstants.CREATE_CENTER_FAIL:
            return{
                isLoading:false,
                user:{},
                error:''
            }
        default:
            return state;
    }
}