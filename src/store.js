import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState  from 'vuex-persistedstate'

//全局
import state from './store/state'
import actions from './store/actions'
import gutters from './store/gutters'
import mutations from './store/mutations'

//模式
import layout from './store/layout'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: actions,
  actions: mutations,
	getters: gutters,
	modules:{
		layout
	},
	plugins:[
    createPersistedState({ storage: window.localStorage })
  ],
})
