import {devUrl,prodUrl,get,post} from './http'

const  url = process.env.VUE_APP_NODESHL == 'DEV' ? devUrl : prodUrl

export const cs = (params)=> post(url + 'cs', params)

//登录
export const login_hick = (params) => post('/users/index', params)
//路由list
export const route_list = (params) => post('/route/index', params)

//获取导航
export const get_route_menu_list = (params) => post(url + 'api/menu-list', params)

//添加路由
export const add_route_menu_item = (params) => post(url + 'api/menu-item-add', params)