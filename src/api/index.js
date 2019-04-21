import {get,post} from './http'

//登录
export const login_hick = (params) => post('/users/index', params)
//路由list
export const route_list = (params) => post('/route/index', params)