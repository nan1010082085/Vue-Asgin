import axios from 'axios'
import {isLocalStorageSupported} from '../utils'

//获取请求头 token
function token () {
	var accessToken = isLocalStorageSupported()&&window.localStorage.getItem('token') ? window.localStorage.getItem('token') : '';
	return accessToken
}

axios.default.timeout = 30000
axios.default.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded;charset=UTF-8';

function requestIntercept() {
	// axios.defaults.withCredentials = true;  //是否验证 开启后 后台 * 跨域失效
	axios.interceptors.request.use(function (request) {
		return request;
	}, function (error) {
		// console.log(error,'请求错误')
	});
	
	axios.interceptors.response.use(function (response) {
		// console.log(response);
		return response;
	}, function (error) {
		if(error.response){
			if(error.response.status == 401){
				// router.replace('/login');
			}else if(error.response.status == 404){
			}
		}
	});
}

requestIntercept();

function get (url, params) {
	var timesamp = new Date().getTime();
	
	if(typeof params == 'object'){
		params['timestamp'] = timesamp
	}else {
		params = {
			'timesamp': timesamp
		}
	}
	//请求头验证
	// if(token() != ''){
	// 	axios.defaults.headers.Authorization  = 'Bearer ' + token();
	// }
	
	return axios.get(url,{
		params : params,
	})
}

function post (url,params) {
	var timesamp = new Date().getTime();
	//请求头验证
	// if(token() != ''){
	// 	axios.defaults.headers.Authorization  = 'Bearer ' + token();
	// }
	if(typeof data == 'object'){
		params['timestamp'] = timesamp
	}else {
		params = {
			'timesamp': timesamp
		}
	}
	return axios.post(url, params)
}

export {
	get,
	post
}