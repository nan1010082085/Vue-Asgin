//登录
import { post } from "./http";

export const login_hick = ( params) => post('/mock/users/index', params)