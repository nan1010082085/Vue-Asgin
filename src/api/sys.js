//获取导航
import { Url,post } from "./http";

export const get_route_menu_list = ( params) => post(Url+'api/menu-list', params)
//添加路由
export const add_route_menu_item = (params) => post(Url+'api/menu-item-add', params)