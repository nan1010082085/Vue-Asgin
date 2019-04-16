import Vue                           from 'vue'
import Router                        from 'vue-router'
import _imports                    from './router/index'


Vue.use(Router)


let routes = [

]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/login',
			name: 'Login',
			component:() => import(/* webpackChunkName: "user" */ '@views/user/login')
		},
		{
			path: '/404',
			name: 'found-404',
			component:() => import(/* webpackChunkName: "utils" */ '@views/utils/404')
		},
		{
			path:'*',
			redirect: '/login'
		}
	]
})


//动态追加路由
router.addRoutes([
	// ...routes
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