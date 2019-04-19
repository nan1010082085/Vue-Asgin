import * as theme from '../assets/theme'

// Object.keys(theme).forEach(em => {
// 	console.log(em)
// })

const state = {
	pattern: '2',  //1 侧边导航模式  2 顶部导航模式
	fixedNav: false,  //是否固定导航
	fixedHeader: false, //固定头部
	//侧边导航模式下 显示菜单按钮
	sidebarBtnShow: false,
	//main  两边留白布局
	mainJustify: false,
	
	navStyle: { //导航背景， 文字， 选中颜色
		...theme.dead
	}
}

const mutations = {
	setLayout (state, layout) {
		state.pattern = layout.pattern
		state.fixedNav = layout.fixedNav
		state.fixedHeader = layout.fixedHeader
		state.navStyle = theme[layout.navStyle]
	}
}

const actions = {}

export default {
	state,
	mutations,
	actions
}