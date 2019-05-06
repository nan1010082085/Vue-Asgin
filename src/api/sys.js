import { Url,post } from "./http";

//获取导航
export const get_route_menu_list = ( params) => post(Url+'api/menu-list', params)
//添加菜单
export const add_route_menu = (params) => post(Url+'api/menu-add', params)
//添加路由
export const add_route_menu_item = (params) => post(Url+'api/menu-item-add', params)