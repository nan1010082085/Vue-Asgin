import {get,post} from './http'
/* 其他接口 未对应 views文件  */
//路由list mock
export const route_list = (params) => post('/route/index', params)