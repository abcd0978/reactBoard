import {AUTH_LOGIN} from "../actions/types"
import {AUTH_REGISTER} from "../actions/types"

export default function auth_reducer(state={},action){
    switch(action.type)
    {
        case AUTH_LOGIN:
            return{
                ...state,
                loginSuccess:action.payload
            }
        break;

        case AUTH_REGISTER:
            return{
                ...state,
                registerSuccess:action.payload
            }
        break;
        
        default:
            return state
    }
}