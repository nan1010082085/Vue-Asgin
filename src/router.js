import Vue      from 'vue'
import Router   from 'vue-router'
import _imports from './router/index'

Vue.use(Router)

import { route_list } from "./api";

//
let route = {
  path : '/views',
  name : 'views',
  component : () => _imports('views'),
  children: []
}
// //动态添加路由
// let routes = [
//
// ]

const router = new Router({
  // mode: 'history',
  base : process.env.BASE_URL,
  routes : [
    {
      path : '/login',
      name : 'Login',
      component : () => _imports('user/login')
    },
    {
      path : '/404',
      name : 'found-404',
      component : () => import(/* webpackChunkName: "utils" */ '@views/utils/404')
    }
  ]
})

//路由元
function routeElement ( route ) {
  let rElement = route
  rElement[ 'component' ] = () => _imports(route.location)
  return rElement
}


/*
* 本地存储路由信息
* 如果本地路由信息不存在则调用接口获取
* 扩展可以在每次添加新的路由时清空 KEY:menuList 来重新获取新的路由数据
* */
if ( !localStorage.getItem('menuList') ) {
  const menu = new Promise(( resolve ) => {
    route_list()
      .then(res => {
        let list = res.data
        localStorage.setItem('menu', JSON.stringify(res.data))
        let menuList = []
        //编辑路由数据
        function pushRoute ( routes ) {
          for ( let i = 0 ; i < routes.length ; i++ ) {
            const listElement = routes[ i ];
            if ( listElement.children ) {
              for ( let j = 0 ; j < listElement.children.length ; j++ ) {
                const childElement = listElement.children[ j ];
                menuList.push(routeElement(childElement))
                if ( childElement.children ) {
                  pushRoute(childElement.children)
                }
              }
            } else {
              menuList.push(routeElement(listElement))
            }
          }
        }
        
        pushRoute(list)
        resolve(menuList)
      })
  })
  menu.then(menus => {
    route['children'] = [...menus]
    router.options.routes = [...router.options.routes, ...[route]]
    router.addRoutes([route])
    localStorage.setItem('menuList', JSON.stringify(route))
  })
} else {
  let menuList = JSON.parse(localStorage.getItem('menuList')).children
  menuList.map(item=>{
    item['component'] = () => _imports(item.location)
    return item
  })
  route['children'] = [...menuList]
  router.addRoutes([route])
  localStorage.setItem('menuList', JSON.stringify(route))
}


router.beforeEach(( to, from, next ) => {
  // console.info(router);
  //登录中 访问页面不存在
  if ( localStorage.getItem('register') && to.name == null ) {
    next('/404')
  }
  
  next()
})
router.afterEach(( to, from ) => {
  // console.log('route after', router)
})

router.onReady(( routes ) => {
  // console.log(routes, 'route ready')
})

export default router