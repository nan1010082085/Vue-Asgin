/**
 * 判断localstorage是否可用
 * @return true 可用, false 不可用
 * @returns {boolean}
 */
function isLocalStorageSupported () {
	let testKey = 'test',
		storage = window.sessionStorage
	try {
		storage.setItem(testKey, 'testValue')
		storage.removeItem(testKey)
		return true
	} catch (error) {
		return false
	}
}

/**
 * 验证码发送倒计时
 * @callback 回调函数 返回code
 */
function sendCode (codeNumber, callback) {
	if (/\D+/.test(codeNumber)) {
		throw 'code is not number'
		return
	}
	var code = {
		numbers: Number(codeNumber),
		timer: ''
	}
	var success = function () {
		code.timer = setInterval(() => {
			code.numbers--
			if (code.numbers == 0) {
				clearInterval(code.timer)
			}
			if(typeof callback === 'function'){
				callback(code)
			}
		}, 1000)
	}
	success()
}

/**
 * 视口改变时
 * @callback 回调函数 返回 Event
 */
function resize (callback) {
	addEventListener('resize',(r)=>{
		if(typeof callback === 'function'){
			callback(r)
		}
	}, false)
}

/**
 * 正则
 * @isHanzi regexp 验证是否是汉字
 * **/
function isHanzi (str) {
	let reg = /^[\u4e00-\u9fa5]+$/
  return !reg.test(str)
}

/**
 * 获取对应跳转路由
 * @path 识别路由path
 * **/
function getRouteItem (path) {
	return JSON.parse(sessionStorage.getItem('menuList')).children.filter(item=> item.path == path)[0]
}

/**
 * 跳转 tabs
 * @router 路由对象 --> 用于跳转页面
 * @tabs  快捷tabs标识名称 --> 用于识别当前选中路由
 * @query 路由参数
 * @callback 回调函数 -- 返回匹配的tabs路由信息和路由
 * **/
function goTabsRoute (router, tabs, query, callback) {
	let route = getRouteItem(tabs);
	let menu = Object.assign({}, route, {query:query})
	if(typeof callback === 'function'){
		callback(menu, route)
	}
	router.push({ name:route.name,query:query })
}

/**
 * 验证路由是否存在
 * @menu  menulist 接口获取的路由数据存放在sessionStorage
 * @to 当前跳转的路由
 * **/
function isRoutePath (menu, to) {
	let temp = []
	
	function temps (menu) {
		for (let i = 0; i < menu.length; i++) {
			const menu1 = menu[ i ]
			temp.push(menu1)
			if (menu1.children) {
				temps(menu1.children)
			}
		}
	}
	temps(menu)
	return temp.filter(rec => rec.name.toLocaleLowerCase() == to.path.split('/')[ to.path.split('/').length - 1 ]).length >= 1 ? true : false
}

export {
	isLocalStorageSupported,
	sendCode,
	resize,
	isHanzi,
	getRouteItem,
	goTabsRoute,
	isRoutePath
}