import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
Vue.config.devtools = process.env.VUE_APP_NODESHL === 'DEV'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
