const Mock = require('mockjs')

const Random = Mock.Random

const routeData = function () {
	let route = [ {
		'children': [],
		'_id': '5cc5cbc17f697639d0aad1a7',
		'path': '',
		'name': '',
		'meta': { 'icon': '', 'location': '', 'isShow': true, 'label': '订单管理' },
		'created': '2019-04-28T15:50:25.815Z',
		'__v': 0
	}, {
		'children': [ {
			'_id': '5cc5c9832f38384518485c23',
			'path': 'setting',
			'name': 'Setting',
			'meta': { 'icon': '', 'location': 'sys/setting', 'isShow': true, 'label': '路由列表' },
			'parentId': '5cc5c695e659cc3b54cbdad5',
			'created': '2019-04-28T15:40:51.435Z',
			'__v': 0
		}, {
			'_id': '5cc5ca841bd1ef41f4e1e111',
			'path': 'add-menu-item',
			'name': 'AddMenuItem',
			'meta': { 'icon': '', 'location': 'sys/add-menu-item', 'isShow': false, 'label': '添加导航' },
			'parentId': '5cc5c695e659cc3b54cbdad5',
			'created': '2019-04-28T15:45:08.398Z',
			'__v': 0
		} ],
		'_id': '5cc5c695e659cc3b54cbdad5',
		'path': '',
		'name': '',
		'meta': { 'icon': '', 'location': '', 'isShow': true, 'label': '菜单设置' },
		'created': '2019-04-28T15:28:21.823Z',
		'__v': 0
	}, {
		'children': [],
		'_id': '5cc5cc011284f31368533bbc',
		'path': '',
		'name': '',
		'meta': { 'icon': '', 'location': '', 'isShow': true, 'label': '物流管理' },
		'created': '2019-04-28T15:51:29.071Z',
		'__v': 0
	}, {
		'children': [],
		'_id': '5cc5cbf4e3e4750b202be73d',
		'path': '',
		'name': '',
		'meta': { 'icon': '', 'location': '', 'isShow': true, 'label': '用户管理' },
		'created': '2019-04-28T15:51:16.957Z',
		'__v': 0
	}, {
		'children': [],
		'_id': '5cc5cc09ebd4f80b94419000',
		'path': '',
		'name': '',
		'meta': { 'icon': '', 'location': '', 'isShow': true, 'label': '活动管理' },
		'created': '2019-04-28T15:51:37.506Z',
		'__v': 0
	} ]
	return route
}

Mock.mock('/route/index', 'post', routeData)