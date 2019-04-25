import * as theme from '../assets/theme'

const state = {
	pattern: '1',  //1 侧边导航模式  2 顶部导航模式
	fixedNav: false,  //是否固定导航
	fixedHeader: false, //固定头部
	mainJustify: false,	//main  两边留白布局
	navStyle: { //导航背景， 文字， 选中颜色
		...theme.aquagreen
	},
	menuList: [],  //点击的 menuList tag
	activeMenu: '', //当前选中的 menuItem
	isAddMenu : false, //更新menu
	activeTabs:'',
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
	setMenuList (state, menu) {
		if (state.menuList.length > 0) {
			let isExist = state.menuList.filter(item => item.label === menu.label).length > 0
			state.menuList.map((m) => {
				// m[ 'check' ] = m.label == menu.label ? true : false
				return m
			})
			if (!isExist) {
				state.menuList.push(menu)
			}
		} else if (typeof menu == 'object') {
			state.menuList.push(menu)
		} else {
			state.menuList = []
		}
	},
	setActiveMenu (state, params) {
		console.log(params)
		state.activeMenu = params.menu
		state.activeTabs = params.tabs
	},
	closeMenuList(state, name){
		state.menuList.forEach((item,index) => {
			if(item.name == name){
				state.menuList.splice(index, 1)
				return
			}
		})
	},
	isAddMenu(state, bool){
		state.isAddMenu = bool
		setTimeout(()=>{
			state.isAddMenu = false
		},300)
	},
	clear(state){
		state.menuList = []
		state.activeMenu = ''
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