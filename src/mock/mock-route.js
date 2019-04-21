const Mock = require('mockjs')

const Random = Mock.Random;

const routeData = function () {
  let route = [
    {
      id:'00001',
      label:'系统设置',
      icon:'',
      children:[
        {
          path:'setting',
          name:'setting',
          label:'路由设置',
          icon:'',
          location:'sys/setting',
          component:'',
        }
      ]
    }
  ]
  return route
}

  Mock.mock('/route/index', 'post', routeData)