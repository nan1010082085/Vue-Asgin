import * as theme from '../assets/theme'

const state = {
	pattern: '1',  //1 侧边导航模式  2 顶部导航模式
	fixedNav: false,  //是否固定导航
	fixedHeader: false, //固定头部
	mainJustify: false,	//main  两边留白布局
	navStyle: { //导航背景， 文字， 选中颜色
		...theme.aquagreen
	},
	tabsList: [],
	activeMenu: '',
	activeTabs:'',
	closeRouterName:'',  //关闭tabs 后自动跳转的路由
	isAddMenu : false, //更新menu
}

const mutations = {
	setLayout (state, layout) {
		state.pattern = layout.pattern
		state.fixedNav = layout.fixedNav
		state.fixedHeader = layout.fixedHeader
		if (layout.navStyle.id) {
			state.navStyle = theme[ layout.navStyle.id ]
		}
	},
	//添加tabs
	setMenuList (state, menu) {
		if (state.tabsList.length > 0) {
			let isExist = state.tabsList.filter(item => item.label === menu.label).length > 0
			if (!isExist) {
				state.tabsList.push(menu)
			}
		} else if (typeof menu == 'object') {
			state.tabsList.push(menu)
		} else {
			state.tabsList = []
		}
	},
	/*
	* @setActiveMenu 选择中menu 和 tabs
	* @setActiveTabs 选中 tabs
	* 选中menu 或 tabs 清空closeRouterName 赋值
	* */
	setActiveMenu (state, params) {
		state.activeMenu = params.menu
		state.activeTabs = params.tabs
		state.closeRouterName = ''
	},
	setActiveTabs (state, params) {
		state.activeTabs = params.tabs
		state.closeRouterName = ''
	},
	//删除tabs
	closeMenuList(state, name){
		state.tabsList.forEach((item,index) => {
			if(item.path == name){
				state.tabsList.splice(index, 1)
				
				if(state.tabsList.length > 0){
					/*
					* 自动跳转前一个tabs 如是menu导航则自动选中
					* 前一个跳转路由赋值
					* */
					try {
						let params = state.tabsList[index - 1]
						state.activeMenu = 	`${params.parentId}-${params.path}`
						state.activeTabs = 	params.path
						state.closeRouterName = {name:params.name,query:params.query }
					}catch (e) {}
				}
				return
			}
		})
	},
	//清空tabs
	closeTabs(state){
		state.activeTabs = ''
	},
	isAddMenu(state, bool){
		state.isAddMenu = bool
		setTimeout(()=>{
			state.isAddMenu = false
		},300)
	},
	clear(state){
		state.tabsList = []
		state.activeMenu = ''
		state.activeTabs = ''
		state.closeRouterName = ''
		state.isAddMenu = false
	}
}

const actions = {}

const gutters = {}

export default {
	state,
	mutations,
	actions,
	gutters
}