import axios from 'axios'
import {isLocalStorageSupported} from '../utils'

//获取请求头 token
function token () {
	var accessToken = isLocalStorageSupported()&&window.localStorage.getItem('token') ? window.localStorage.getItem('token') : '';
	return accessToken
}
axios.defaults.timeout = 30000
axios.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 账户验证
// axios.defaults.auth = {
//	 username: '',
//   password: ''
// }
/**
 * ajax 拦截器
 */
(function () {
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
})()
/*
* get 请求
* */
function get (url, params) {
	let timesamp = new Date().getTime();
	//请求中加入token
	if(token() != ''){
		// axios.defaults.headers.Authorization  = 'Bearer ' + token();
	}
	if(typeof params == 'object'){
		params['timestamp'] = timesamp
	}else {
		params = {
			'timesamp': timesamp
		}
	}
	
	return axios({
		method:'get',
		url:url,
		params:params
	})
}
/*
* post 请求
* */
function post (url,params,query) {
	let timesamp = new Date().getTime();
	//请求中加入token
	if(token() != ''){
		// axios.defaults.headers.Authorization  = 'Bearer ' + token();
	}
	if(typeof data == 'object'){
		params['timestamp'] = timesamp
	}else {
		params = {
			'timesamp': timesamp
		}
	}
	return axios({
		method:'post',
		url:url,
		data:params,
		query:query
	})
}

export {
	get,
	post
}