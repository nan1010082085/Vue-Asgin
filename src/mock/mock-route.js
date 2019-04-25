const Mock = require('mockjs')

const Random = Mock.Random;

const routeData = function () {
  let route = [
    {
      id:'00001',
      label:'系统设置',
			icon:'el-icon-setting',
			isShow:true,
      children:[
        {
          path:'setting',
          name:'setting',
					label:'路由设置',
					icon:'',
					location:'sys/setting',
					isShow:true,
          component:'',
        },
				{
					path:'cs-add',
					name:'cs-add',
					label:'测试1',
					icon:'',
					location:'sys/cs-add',
					isShow:true,
					component:'',
				},
				{
					path:'cs-add2',
					name:'cs-add2',
					label:'测试2',
					icon:'',
					location:'sys/cs-add2',
					isShow:true,
					component:'',
				},
				{
					path:'setting-add',
					name:'setting-add',
					label:'路由添加',
					icon:'',
					location:'sys/setting-add',
					isShow:false,
					component:'',
				}
      ]
    }
  ]
  return route
}

  Mock.mock('/route/index', 'post', routeData)