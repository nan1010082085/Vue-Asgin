import Vue      from 'vue'
import Router   from 'vue-router'
import _imports from './router/index'

Vue.use(Router)

import { route_list } from "./api";

let route = {
	path : '/views',
	name : 'views',
	component : () => _imports('views'),
	children: [],
	beforeEnter: (to, from, next) => {
		next();
	}
}
const routesDefault = [
	{
		path : '/login',
		name : 'Login',
		component : () => _imports('user/login')
	},
	{
		path : '/404',
		name : 'found-404',
		component : () => import(/* webpackChunkName: "utils" */ '@views/utils/404')
	},
]

const router = new Router({
  // mode: 'history',
  base : process.env.BASE_URL,
	isAddRoutesMenu:false,
	scrollBehavior (to, from, savedPosition) {
		return { y: 0 }
	},
  routes : routesDefault.concat([route])
})

/*
* 路由元
* */
function routeElement ( route ) {
  let rElement = route
  rElement[ 'component' ] = () => _imports(route.location)
  return rElement
}
/*
* 递归路由数据
* */
let pushRouteList = []
function pushRoute ( routes ) {
	for ( let i = 0 ; i < routes.length ; i++ ) {
		const listElement = routes[ i ];
		if ( listElement.children ) {
			pushRoute(listElement.children)
		} else if(listElement.path){
			pushRouteList.push(routeElement(listElement))
		}
	}
	return pushRouteList
}
/*
* 本地存储路由信息
* 如果本地路由信息不存在则调用接口获取
* 扩展可以在每次添加新的路由时清空 KEY:menuList 来重新获取新的路由数据
*
* @pushRouteList 重新获取路由时清空全局数据
* */
function setAddRoutes () {
	pushRouteList = []
	let list = JSON.parse(localStorage.getItem('menu'))
	let menuList = pushRoute(list)
	let arr = []
	route['children'].forEach((routes)=>{
		arr.push(routes.name)
	})
	menuList.forEach((item)=>{
		if(!arr.includes(item.name)){
			route['children'] = [...route['children'], ...[item]]
			router.addRoutes([route])
		}
	})
	localStorage.setItem('menuList', JSON.stringify(route))
}
function setAddRoutesMenuList(){
	if(!router.options.isAddRoutesMenu || !localStorage.getItem('menuList')){}
	const menu = new Promise(( resolve ) => {
		pushRouteList = []
		route_list()
			.then(res => {
				let list = res.data
				localStorage.setItem('menu', JSON.stringify(res.data))
				let menuList = pushRoute(list)
				resolve(menuList)
			})
	})
	menu.then(menus => {
		route['children'] = [...menus]
		router.options.isAddRoutesMenu = true
		router.addRoutes([route])
		localStorage.setItem('menuList', JSON.stringify(route))
	})
}
//新添加的路由不能刷新， 因为mock接口中没有这条路由数据
// setAddRoutesMenuList()
/*
* 比对本地数据，是否添加了路由
* */
function isExistRoutes(){
	pushRouteList = []
	let list = JSON.parse(localStorage.getItem('menu'))
	let olist = route['children']
	let menuList = pushRoute(list)
	return menuList != olist ? true : false;
}

router.beforeEach(( to, from, next ) => {
	if(router.options.isAddRoutesMenu){
		if(isExistRoutes()){
			setAddRoutes()
			if(to.name == null ){
				next('/404')
			}else {
				next()
			}
		}else {
			//登录中 访问页面不存在
			if ( localStorage.getItem('register') && to.name == null ) {
			  next('/404')
			}else if(!localStorage.getItem('register') && to.name != 'Login'){
				next('/login')
			}else {
				next()
			}
		}
	}else{
		setAddRoutesMenuList()
		console.log(router, 'before false')
		if(to.path === '/'){
			next('/login')
		}else {
			next()
		}
	}
})
router.afterEach(( to, from ) => {
  // console.log('route after', router)
})

export default router