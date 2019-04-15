import Vue                           from 'vue'
import Router                        from 'vue-router'
import _imports                    from './router/index'

console.log()
Vue.use(Router)


let routes = [
	{
		path: '/',
		name: 'home',
		component: ()=> _imports('Home')
	},
	{
		path: '/about',
		name: 'about',
		component: ()=> _imports('about/About')
	},
	{
		path: '/info',
		name: 'info',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: ()=> _imports('about/info')
	}
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/404',
			name: 'found-404',
			component:() => import(/* webpackChunkName: "utils" */ '@views/utils/404.vue')
		},
		// {
		// 	path: '/info',
		// 	name: 'info',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (about.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: ()=> _imports('about/info')
		// }
	]
})


//动态追加路由
router.addRoutes([
	...routes
])
console.log(router)

router.beforeEach((to, from, next)=>{
	console.log('route before')
	next()
})
router.afterEach((to, from)=>{
	console.log('route after')
})

router.onReady((routes)=>{
	console.log(routes, 'route ready')
})

export default router