/**
 * 路由设置
 **/
import Vue             from 'vue'
import Router          from 'vue-router'
import { Message }     from 'element-ui'
import component       from './router/index'
import { isRoutePath } from './utils'
import { route_list }  from "./api";

Vue.use(Router)

/* 默认路由 */
const defaultRoutes = [
  { path : '/login', name : 'Login', component : component('user/login'), meta : { label : 'Login', default : true } },
  { path : '/404', name : 'nofound', component : component('utils/404'), meta : { label : '404', default : true } }
]

/**
 * 所有新添加的路由都在view children下
 * 站内规则：
 * 路由path应为简写名称 短线连接 例子： add-menu-list
 * 路由name应为path大写
 * **/
const viewRoutes = {
  path : '/views',
  name : 'views',
  component : component('views'),
  meta : {
    label : 'views',
    default : true
  },
  children : [],
  beforeEnter : ( to, from, next ) => {
    if ( to.name == 'views' ) {
      next({ name : 'home' })
    } else {
      next()
    }
  }
}

/*
 * 路由元
 * */
function routeElement ( route ) {
  let rElement = route
  rElement[ 'component' ] = component(route.meta.location)
  return rElement
}

/*
 * 递归路由数据
 * */
let pushRouteList = []

function pushRoute ( routes ) {
  for ( let i = 0; i < routes.length; i++ ) {
    let listElement = routes[ i ];
    if ( listElement.children && Array.isArray(listElement.children) && listElement.children.length > 0 ) {
      pushRoute(listElement.children)
    } else if ( listElement.path ) {
      pushRouteList.push(routeElement(listElement))
    }
  }
  
  return pushRouteList
}

/*
 * 本地存储路由信息
 * 如果本地路由信息不存在则调用接口获取
 * 扩展可以在每次添加新的路由时清空 KEY:menuList 来重新获取新的路由数据
 * */
function setAddRoutesMenuList ( to, next ) {
  route_list()
    .then(res => {
      //生产中不显示菜单设置
      if ( process.env.VUE_APP_NODESHL === 'PORD' ) {
        res = res.map(( menu ) => {
          if ( menu.meta.label === '菜单设置' ) {
            menu.meta.isShow = false
            return menu
          }
        })
      }
      //views
      viewRoutes.children = [ ...pushRoute(res) ]
      //注入动态路由
      router.addRoutes([ viewRoutes ])
      console.log(router);
      router.options.isAddBusinessRoutesMenu = true
      sessionStorage.setItem('menuList', JSON.stringify(viewRoutes) || '{}')
      sessionStorage.setItem('menu', JSON.stringify(res) || '[]')
      // next({ ...to })
    })
    .catch(() => {
      // router.push({ name: 'Login' })
    })
}


const router = new Router({
  // mode: 'history',
  base : process.env.BASE_URL,
  isAddBusinessRoutesMenu : false, //是否在主业务入口添加路由
  scrollBehavior ( to, from, savedPosition ) {
    return { y : 0 }
  },
  routes : defaultRoutes
})
setAddRoutesMenuList()

router.beforeEach(( to, from, next ) => {
  if ( router.options.isAddBusinessRoutesMenu && isRoutePath([ JSON.parse(sessionStorage.getItem('menuList')) ], to)
    || to.matched.some(recad => recad.meta.default) ) {
    next()
  } else {
    if ( to.path === '/' ) {
      next({ name : 'Login' })
    } else if ( to.path !== '/login' && !localStorage.getItem('register')
      || to.path !== '/login' && localStorage.getItem('register') == 'undefined' ) {
      Message('请先登录')
      next({ name : 'Login' })
    } else if ( isRoutePath([ JSON.parse(sessionStorage.getItem('menuList')) ], to) ) {
      next()
    } else {
      Message.warning('跳转页面不存在')
      next({ name : 'nofound' })
    }
  }
})
router.afterEach(( to, from ) => {
  console.log('route after', router)
})

export default router