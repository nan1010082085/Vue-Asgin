import axios                       from 'axios'
import config                      from '../config'
import { MessageBox, Message }     from 'element-ui'
import store                       from '@/store'
import { isLocalStorageSupported } from '../utils'

const Url = config.Base_URL

const instance = axios.create({
  // baseURL : config.Base_URL,
  timeout : 5000,
  headers : { 'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8' }
})

//获取请求头 token
function token () {
  var accessToken = isLocalStorageSupported() && window.localStorage.getItem('token') ? window.localStorage.getItem('token') : '';
  return accessToken
}
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
  instance.interceptors.request.use(function ( request ) {
    return request;
  }, function ( error ) {
    // console.log(error,'请求错误')
  });
  instance.interceptors.response.use(function ( response ) {
    // console.log(response);
    return response.data;
  }, function ( error ) {
    if ( error.response ) {
      if ( error.response.status == 401 ) {
        // router.replace('/login');
      } else if ( error.response.status == 404 ) {
      }
    }
  });
})()

/*
 * get 请求
 * */
function get ( url, params ) {
  let timesamp = new Date().getTime();
  //请求中加入token
  if ( token() != '' ) {
    // axios.defaults.headers.Authorization  = 'Bearer ' + token();
  }
  if ( typeof params == 'object' ) {
    params[ 'timestamp' ] = timesamp
  } else {
    params = {
      'timesamp' : timesamp
    }
  }
  
  return instance({
    method : 'get',
    url : url,
    params : params
  })
}

/*
 * post 请求
 * */
function post ( url, params, query ) {
  let timesamp = new Date().getTime();
  //请求中加入token
  if ( token() != '' ) {
    // axios.defaults.headers.Authorization  = 'Bearer ' + token();
  }
  if ( typeof params == 'object' ) {
    params[ 'timestamp' ] = timesamp
  } else {
    params = {
      'timesamp' : timesamp
    }
  }
  return instance({
    method : 'post',
    url : url,
    data : params,
    query : query
  })
}

export {
  Url,
  get,
  post
}