import Vue from 'vue'
import Vuex from 'vuex'

//全局
import state from './store/state'
import actions from './store/actions'
import gutters from './store/gutters'
import mutations from './store/mutations'


Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: actions,
  actions: mutations,
	getters: gutters,
	modules:{},
	plugins:[],
})
