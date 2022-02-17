import api from './index'

// post가입
export async function register(data){
    const res = await api.post('/auth/register',data)
    return res;
}
// post 로그인
export async function login(data){
    const res = await api.post('/auth/login',data);
    return res;
}