import {get,post} from './http'

//登录
export const login_hick = (params) => {
	return post('', params)
}