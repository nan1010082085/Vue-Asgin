import Vue      from 'vue'
import Router   from 'vue-router'
import _imports from './router/index'

Vue.use(Router)

import { get_route_menu_list } from "./api";

let route = {
	path : '/views',
	name : 'views',
	component : () => _imports('views'),
	meta:{
		label:'views'
	},
	children: [],
	beforeEnter: (to, from, next) => {
		// console.log(to, 'views')
		next();
	}
}

/* 默认路由 */
const routesDefault = [
	{
		path : '/login',
		name : 'Login',
		component : () => _imports('user/login'),
		meta:{
			label:'Login',
			default:true
		},
	},
	{
		path : '/404',
		name : 'found-404',
		component : () => import(/* webpackChunkName: "utils" */ '@views/utils/404'),
		meta:{
			label:'404',
			default:true
		},
	},
]

/*
* 路由元
* */
function routeElement ( route ) {
  let rElement = route
  rElement[ 'component' ] = () => _imports(route.meta.location)
  return rElement
}
/*
* 递归路由数据
* */
let pushRouteList = []
function pushRoute ( routes ) {
	for ( let i = 0 ; i < routes.length ; i++ ) {
		const listElement = routes[ i ];
		if (
			listElement.children
			&& Array.isArray(listElement.children)
			&& listElement.children.length > 0
		) {
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
function setAddRoutesMenuList(){
	if(!router.options.isBusinessRoutesMenuAdd
		|| !localStorage.getItem('menuList')
	){
		get_route_menu_list()
			.then(res=>{
				route['children'] = [...pushRoute(res.data)]
				router.addRoutes([route])
				router.options.isBusinessRoutesMenuAdd = true
				localStorage.setItem('menuList', JSON.stringify(route))
				localStorage.setItem('menu', JSON.stringify(res.data))
			})
	}
}

const router = new Router({
	// mode: 'history',
	base : process.env.BASE_URL,
	isBusinessRoutesMenuAdd:false, //是否在主业务入口添加路由
	scrollBehavior (to, from, savedPosition) {
		return { y: 0 }
	},
	routes : routesDefault.concat(route),
})
setAddRoutesMenuList();

router.beforeEach(( to, from, next ) => {
	if(to.matched.some(record => record.meta.default)){
		next()
	}else {
		if(router.options.isBusinessRoutesMenuAdd){
			next()
		}else {
			if(to.path === '/') next('/login')
			next()
		}
	}
})
router.afterEach(( to, from ) => {
  // console.log('route after', router)
})

export default router