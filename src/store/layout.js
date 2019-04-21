import * as theme from '../assets/theme'

import router from '../router'
// Object.keys(theme).forEach(em => {
// // 	console.log(em)
// // })

const state = {
	pattern: '1',  //1 侧边导航模式  2 顶部导航模式
	fixedNav: false,  //是否固定导航
	fixedHeader: false, //固定头部
	mainJustify: false,	//main  两边留白布局
	navStyle: { //导航背景， 文字， 选中颜色
		...theme.aquagreen
	},
  menuList:[],  //点击的 menuList tag
  activeMenu:'', //当前选中的 menuItem
}

const mutations = {
	setLayout (state, layout) {
		state.pattern = layout.pattern
		state.fixedNav = layout.fixedNav
		state.fixedHeader = layout.fixedHeader
    if(layout.navStyle.id){
      state.navStyle = theme[layout.navStyle.id]
    }
	},
  setMenuList(state, menu){
	  if(state.menuList.length > 0){
      state.menuList.forEach((item,index)=>{
        if(item.label == menu.label){
          state.menuList[index] = menu
          return
        }else {
          state.menuList.forEach((m)=>{
            m['check'] = false;
          })
          state.menuList.push(menu)
        }
      })
    }else {
      state.menuList.push(menu)
    }
   
  },
  setActiveMenu(state, index){
    state.activeMenu = index
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