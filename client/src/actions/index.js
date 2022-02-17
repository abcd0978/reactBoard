import {AUTH_LOGIN,AUTH_REGISTER} from "./types";
import * as authApi from '../api/auth'

export async function registerUser(data){
    const req = await authApi.register(data)
    .then(res=>(res.data))
    return {
        type:AUTH_REGISTER,
        payload: req
    }
}
export async function loginUser(data){
    const req = await authApi.login(data)
    .then(res=>res.data)

    return {
        type:AUTH_LOGIN,
        payload: req
    }
}
